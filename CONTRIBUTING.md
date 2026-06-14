# Contributing

## Local Setup

Use Node.js 18 or newer and Windows PowerShell or PowerShell 7.

```powershell
npm run validate
```

No package install is required for the default validation path because the validators use Node built-ins and PowerShell.

## Pull Request Expectations

- Keep `SKILL.md` concise.
- Move long details into `references/`.
- Add or update forward-test prompts for behavior changes.
- Update docs when install, plugin, or validation behavior changes.
- Run the full validation chain.
- Do not include generated archives, logs, screenshots, dependency folders, local config, or secrets.

## Review Focus

Reviewers should check:

- trigger description quality
- progressive disclosure
- script safety
- Windows behavior
- plugin and marketplace metadata
- public docs accuracy
- secret-safety
