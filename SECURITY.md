# Security Policy

## Supported Versions

The current supported line is `0.1.x`.

## Reporting A Vulnerability

Report security issues privately through GitHub Security Advisories when available. If advisories are not enabled, open a minimal issue that does not include secrets, exploit payloads, private data, or credentials.

## Security Expectations

- Do not include real tokens, cookies, keys, auth files, private prompts, customer data, or local config in issues or pull requests.
- Use inert placeholders such as `replace_me` and `example.invalid`.
- Treat generated skills and plugins as supply-chain artifacts.
- Review scripts, manifests, marketplace entries, and install docs before release.
- Run `npm run validate` before publication.

## Before Public Release

Run:

```powershell
npm run validate
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/security-scan.ps1 -History
```

Enable GitHub secret scanning and push protection when the repo is public.
