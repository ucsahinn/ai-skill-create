# Threat Model

## Assets

- Generated skill instructions and references.
- Plugin manifest and marketplace metadata.
- Install scripts.
- Public documentation.
- Contributor and user environments.

## Trust Boundaries

Untrusted inputs include user briefs, copied examples, web pages, GitHub issues, MCP output, logs, and generated text.

Trusted inputs include reviewed repository templates, validators, and explicit user approvals.

## Main Risks

1. A malicious brief causes a generated skill to include hidden override instructions.
2. A script writes outside the intended directory or overwrites user files.
3. Public examples leak secrets or local machine paths.
4. Plugin metadata requests broad tool or connector permissions.
5. Install docs claim unverified commands.
6. CI or release workflows publish artifacts before validation.

## Controls

- Keep generated content inside validated paths.
- Reject secret-like values and local-only paths.
- Require explicit flags for global writes.
- Use dry-run install checks.
- Validate manifests and markdown links.
- Run Gitleaks before publication.
- Keep plugin metadata limited to skills unless integrations are intentionally added.
