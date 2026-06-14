#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const markdownFiles = walk(root).filter((file) => file.endsWith(".md"));

for (const file of markdownFiles) {
  const text = stripCodeBlocks(fs.readFileSync(file, "utf8"));
  const rel = slash(path.relative(root, file));
  const linkPattern = /!?\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let match;
  while ((match = linkPattern.exec(text))) {
    const href = match[1];
    if (!href || href.startsWith("#") || /^[a-z]+:/i.test(href) || href.startsWith("mailto:")) continue;
    const [rawPath, anchor] = href.split("#");
    const decoded = decodeURIComponent(rawPath);
    const target = path.resolve(path.dirname(file), decoded);
    if (!isInside(root, target)) {
      errors.push(`${rel} link escapes repo: ${href}`);
      continue;
    }
    if (!fs.existsSync(target)) {
      errors.push(`${rel} broken link: ${href}`);
      continue;
    }
    if (anchor && fs.statSync(target).isFile() && target.endsWith(".md")) {
      const anchors = collectAnchors(fs.readFileSync(target, "utf8"));
      if (!anchors.has(anchor.toLowerCase())) errors.push(`${rel} missing anchor '${anchor}' in ${href}`);
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log("OK: markdown links");

function walk(dir) {
  const output = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...walk(full));
    else output.push(full);
  }
  return output;
}

function stripCodeBlocks(text) {
  return text.replace(/```[\s\S]*?```/g, "");
}

function collectAnchors(text) {
  const anchors = new Set();
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (!match) continue;
    anchors.add(match[2].trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, "-"));
  }
  return anchors;
}

function isInside(parent, child) {
  const relative = path.relative(path.resolve(parent), path.resolve(child));
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function slash(value) {
  return value.replace(/\\/g, "/");
}
