# Codex Skill Forge

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Oeffentliches Codex-Skill- und Plugin-Paket zum Erstellen, Validieren, Testen, Verpacken und Dokumentieren neuer Codex-Skills aus echten Briefings.

## Warum dieses Repository existiert

Oeffentliches Codex-Skill- und Plugin-Paket zum Erstellen, Validieren, Testen, Verpacken und Dokumentieren neuer Codex-Skills aus echten Briefings.

Diese lokalisierte Startseite wird gepflegt, damit Leser das Repository nicht nur ueber ein kurzes Sprach-Badge verstehen muessen. Die tiefe kanonische Referenz bleibt in README.md; diese Seite enthaelt genug Kontext, um den richtigen Einstieg, die Sicherheitsgrenze und die Verifikation zu waehlen.

## Fuer wen es gedacht ist

Skill-Autoren, Maintainer und Teams, die triggerbare, kurze, progressive-disclosure-freundliche und installierbare Codex-Skills veroeffentlichen moechten.

## Schnellstart

| Wenn du brauchst... | Oeffne |
| --- | --- |
| Install guide | [docs/INSTALL.md](docs/INSTALL.md) |
| Usage guide | [docs/USAGE.md](docs/USAGE.md) |
| Validation | [docs/VALIDATION.md](docs/VALIDATION.md) |
| Skill structure | [docs/SKILL_STRUCTURE.md](docs/SKILL_STRUCTURE.md) |
| Plugin and marketplace | [docs/PLUGIN_AND_MARKETPLACE.md](docs/PLUGIN_AND_MARKETPLACE.md) |
| Security policy | [SECURITY.md](SECURITY.md) |

## Repository-Karte

- plugins/codex-skill-forge/ - plugin package
- plugins/codex-skill-forge/skills/codex-skill-forge/SKILL.md - skill entrypoint
- plugins/codex-skill-forge/skills/codex-skill-forge/references/ - progressive-disclosure references
- scripts/ - validation and install helpers
- tests/forward-prompts/ - forward-test prompts
- templates/ - reusable scaffolding templates

## Validierung und Release-Hygiene

Vor Commit oder Veroeffentlichung sollten Links, Markdown, vorhandene Repo-Validierung und Gitleaks geprueft werden.

Empfohlener Release-/Readiness-Pfad:

1. Relevante README und verlinkte Dokumente pruefen.
2. Die Validierung des Repositories ausfuehren, wenn ein Befehl vorhanden ist.
3. Markdown-Links und lokale Assets kontrollieren.
4. Gitleaks oder den konfigurierten Secret Scan ausfuehren.
5. Nach dem Push origin/main pruefen, bevor Veroeffentlichung als erledigt gemeldet wird.

## Sicherheits- und Public-Scope-Grenze

Generierte Skills duerfen keine Secrets, privaten Prompts, Kundendaten oder lokalen Pfade speichern. Skripte muessen deterministisch, erklaerbar und least-privilege bleiben.

## Mitwirken und Pflege

Halten Sie lokalisierte Seiten synchron mit der kanonischen README, wenn sich Scope, Installationsschritte, Release-Regeln oder Sicherheitsgrenzen aendern. Fuegen Sie keine Aussagen hinzu, die nicht durch Repository, Live-Produktdokumentation oder oeffentliche Release-Nachweise gedeckt sind.

## Vollstaendigkeitsstandard

Diese lokalisierte README ist keine Kurznotiz. Sie erklaert Zweck, Einstieg, Repository-Flaechen, Validierung, Sicherheitsgrenze und kanonische Referenzen.

Kanonische Referenz: [README.md](README.md).
