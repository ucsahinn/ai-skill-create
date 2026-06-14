# Public Repo Checklist

Before publishing:

- `npm run validate` passes.
- History secret scan passes after git init.
- README and README.tr match.
- Plugin version matches changelog.
- GitHub workflows are present.
- Issue templates ask for sanitized logs only.
- No generated archives or dependency folders are staged.
- Remote target is correct.
- CI passes after push.
- Release notes match the tag.

Before telling users a command is canonical:

- Run it locally or in a clean temp environment.
- Confirm what it writes.
- Document the tested date and version when relevant.
