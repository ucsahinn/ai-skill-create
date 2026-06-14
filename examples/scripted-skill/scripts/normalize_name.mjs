#!/usr/bin/env node
const input = process.argv.slice(2).join(" ");
const name = input
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "")
  .slice(0, 63);

if (!name) {
  console.error("ERROR: provide a proposed skill name.");
  process.exit(1);
}

console.log(name);
