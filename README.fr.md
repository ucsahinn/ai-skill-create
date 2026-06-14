# Codex Skill Forge

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Package public de skill et plugin Codex pour creer, valider, tester, packager et documenter de nouvelles skills a partir de briefs reels.

## Pourquoi ce depot existe

Package public de skill et plugin Codex pour creer, valider, tester, packager et documenter de nouvelles skills a partir de briefs reels.

Cette page localisee est maintenue pour que le lecteur comprenne le depot sans dependre d un simple badge de langue. La reference canonique complete reste dans README.md; cette page donne assez de contexte pour choisir le bon point d entree, la limite de securite et la verification correcte.

## Pour qui

Auteurs de skills, mainteneurs et equipes qui veulent publier des skills Codex declenchables, concises, progressives et installables.

## Demarrage rapide

| Si vous avez besoin de... | Ouvrez |
| --- | --- |
| Install guide | [docs/INSTALL.md](docs/INSTALL.md) |
| Usage guide | [docs/USAGE.md](docs/USAGE.md) |
| Validation | [docs/VALIDATION.md](docs/VALIDATION.md) |
| Skill structure | [docs/SKILL_STRUCTURE.md](docs/SKILL_STRUCTURE.md) |
| Plugin and marketplace | [docs/PLUGIN_AND_MARKETPLACE.md](docs/PLUGIN_AND_MARKETPLACE.md) |
| Security policy | [SECURITY.md](SECURITY.md) |

## Carte du depot

- plugins/codex-skill-forge/ - plugin package
- plugins/codex-skill-forge/skills/codex-skill-forge/SKILL.md - skill entrypoint
- plugins/codex-skill-forge/skills/codex-skill-forge/references/ - progressive-disclosure references
- scripts/ - validation and install helpers
- tests/forward-prompts/ - forward-test prompts
- templates/ - reusable scaffolding templates

## Validation et hygiene de release

Avant commit ou publication, verifiez les liens, le Markdown, la validation existante du depot et Gitleaks.

Parcours release/readiness recommande:

1. Relire le README pertinent et les documents lies.
2. Executer la validation du depot lorsqu une commande existe.
3. Verifier les liens Markdown et les assets locaux.
4. Executer Gitleaks ou le secret scan configure.
5. Verifier origin/main apres le push avant d annoncer que la publication est terminee.

## Limite securite et perimetre public

Les skills generees ne doivent pas stocker de secrets, prompts prives, donnees client ni chemins locaux. Les scripts doivent rester deterministes, explicables et least-privilege.

## Contribution et maintenance

Gardez les pages localisees alignees avec le README canonique lorsque le perimetre, les etapes d installation, les regles de release ou les limites de securite changent. N ajoutez pas d affirmations sans preuve dans le depot, les docs live du produit ou les elements publics de release.

## Standard de completude

Ce README localise n est pas une note courte. Il explique le but, l entree rapide, les surfaces du depot, la validation, la limite de securite et les references canoniques.

Reference canonique: [README.md](README.md).
