---
name: scripted-skill
description: Demonstrate a scripted Codex skill that normalizes proposed skill names into lowercase kebab-case and validates naming constraints.
---

# Scripted Skill

Use this skill to create a valid skill name from a user-provided title.

## Workflow

1. Run `scripts/normalize_name.mjs` with the proposed title.
2. Confirm the normalized name is specific enough to trigger clearly.
3. Ask for a better domain clue only if the normalized name is too generic.

## Completion Criteria

The output includes the normalized name and any naming concerns.
