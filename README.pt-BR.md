# Codex Skill Forge

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Pacote publico de skill e plugin para Codex que cria, valida, testa, empacota e documenta novas skills a partir de briefs reais.

## Por que este repositorio existe

Pacote publico de skill e plugin para Codex que cria, valida, testa, empacota e documenta novas skills a partir de briefs reais.

Esta pagina localizada e mantida para que leitores entendam o repositorio sem depender apenas de uma etiqueta curta de idioma. A referencia canonica profunda continua em README.md; esta pagina traz contexto suficiente para escolher a entrada, o limite de seguranca e a verificacao correta.

## Para quem e

Autores de skills, maintainers e equipes que querem publicar skills de Codex acionaveis, concisas, com progressive disclosure e instalaveis.

## Comeco rapido

| Se voce precisa... | Abra |
| --- | --- |
| Install guide | [docs/INSTALL.md](docs/INSTALL.md) |
| Usage guide | [docs/USAGE.md](docs/USAGE.md) |
| Validation | [docs/VALIDATION.md](docs/VALIDATION.md) |
| Skill structure | [docs/SKILL_STRUCTURE.md](docs/SKILL_STRUCTURE.md) |
| Plugin and marketplace | [docs/PLUGIN_AND_MARKETPLACE.md](docs/PLUGIN_AND_MARKETPLACE.md) |
| Security policy | [SECURITY.md](SECURITY.md) |

## Mapa do repositorio

- plugins/codex-skill-forge/ - plugin package
- plugins/codex-skill-forge/skills/codex-skill-forge/SKILL.md - skill entrypoint
- plugins/codex-skill-forge/skills/codex-skill-forge/references/ - progressive-disclosure references
- scripts/ - validation and install helpers
- tests/forward-prompts/ - forward-test prompts
- templates/ - reusable scaffolding templates

## Validacao e higiene de release

Antes de commit ou publicacao, revise links, Markdown, validacao existente do repo e Gitleaks.

Caminho recomendado de release/readiness:

1. Revise o README relevante e os documentos linkados.
2. Execute a validacao do repositorio quando existir um comando.
3. Verifique links Markdown e assets locais.
4. Execute Gitleaks ou o secret scan configurado.
5. Verifique origin/main depois do push antes de afirmar que a publicacao terminou.

## Limite de seguranca e escopo publico

As skills geradas nao devem armazenar segredos, prompts privados, dados de clientes ou caminhos locais. Scripts devem ser deterministicos, explicaveis e least-privilege.

## Contribuicao e manutencao

Mantenha as paginas localizadas alinhadas com o README canonico quando escopo, passos de instalacao, regras de release ou limites de seguranca mudarem. Nao adicione afirmacoes sem respaldo no repositorio, docs live do produto ou evidencia publica de release.

## Padrao de completude

Este README localizado nao e uma nota curta. Ele explica proposito, entrada, superficies do repositorio, validacao, limite de seguranca e referencias canonicas.

Referencia canonica: [README.md](README.md).
