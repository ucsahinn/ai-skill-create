# Skill Structure

Codex Skill Forge uses the plugin-compatible layout:

```text
plugins/codex-skill-forge/
  .codex-plugin/plugin.json
  skills/codex-skill-forge/
    SKILL.md
    agents/openai.yaml
    references/
    scripts/
    assets/
```

## Runtime Skill Folder

The runtime skill folder is:

```text
plugins/codex-skill-forge/skills/codex-skill-forge
```

It contains only files that help another Codex instance use the skill.

## Public Repo Files

Public repo files stay outside the runtime skill folder:

- README files
- install docs
- security docs
- changelog
- contributing guide
- GitHub workflows
- examples
- validation scripts

This keeps the skill lean and prevents marketing or maintenance text from entering the runtime context.
