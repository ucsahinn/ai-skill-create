---
name: minimal-skill
description: Demonstrate a minimal instruction-only Codex skill that drafts concise release notes from a changelog, commit summary, or PR description.
---

# Minimal Skill

Use this skill to turn a small set of technical changes into clear release notes.

## Workflow

1. Read the provided changelog, PR summary, or diff summary.
2. Group changes into added, changed, fixed, and security sections only when those sections are useful.
3. Keep wording concrete and avoid unsupported claims.
4. Report missing version or date information.

## Completion Criteria

Release notes are ready when they are concise, accurate, and tied only to provided evidence.
