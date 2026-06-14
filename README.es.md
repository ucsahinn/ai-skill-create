# Codex Skill Forge

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Paquete publico de skill y plugin para Codex que crea, valida, prueba, empaqueta y documenta nuevas skills desde briefs reales.

## Por que existe este repositorio

Paquete publico de skill y plugin para Codex que crea, valida, prueba, empaqueta y documenta nuevas skills desde briefs reales.

Esta portada localizada se mantiene para que el lector entienda el repositorio sin depender de una etiqueta de idioma corta. La referencia canonica profunda sigue en README.md; esta pagina contiene suficiente contexto para elegir el punto de entrada, el limite de seguridad y la verificacion correcta.

## Para quien es

Autores de skills, maintainers y equipos que quieren publicar skills de Codex activables, concisas, con progressive disclosure e instalables.

## Inicio rapido

| Si necesitas... | Abre |
| --- | --- |
| Install guide | [docs/INSTALL.md](docs/INSTALL.md) |
| Usage guide | [docs/USAGE.md](docs/USAGE.md) |
| Validation | [docs/VALIDATION.md](docs/VALIDATION.md) |
| Skill structure | [docs/SKILL_STRUCTURE.md](docs/SKILL_STRUCTURE.md) |
| Plugin and marketplace | [docs/PLUGIN_AND_MARKETPLACE.md](docs/PLUGIN_AND_MARKETPLACE.md) |
| Security policy | [SECURITY.md](SECURITY.md) |

## Mapa del repositorio

- plugins/codex-skill-forge/ - plugin package
- plugins/codex-skill-forge/skills/codex-skill-forge/SKILL.md - skill entrypoint
- plugins/codex-skill-forge/skills/codex-skill-forge/references/ - progressive-disclosure references
- scripts/ - validation and install helpers
- tests/forward-prompts/ - forward-test prompts
- templates/ - reusable scaffolding templates

## Validacion e higiene de release

Antes de commit o publicacion, revisa links, Markdown, validacion existente del repo y Gitleaks.

Ruta recomendada de release/readiness:

1. Revisar el README relevante y los documentos enlazados.
2. Ejecutar la validacion del repositorio cuando exista un comando.
3. Comprobar links Markdown y assets locales.
4. Ejecutar Gitleaks o el secret scan configurado.
5. Verificar origin/main despues del push antes de afirmar que la publicacion termino.

## Limite de seguridad y alcance publico

Las skills generadas no deben guardar secretos, prompts privados, datos de clientes ni rutas locales. Los scripts deben ser deterministas, explicables y de minimo privilegio.

## Contribucion y mantenimiento

Mant?n las paginas localizadas alineadas con el README canonico cuando cambien el alcance, los pasos de instalacion, las reglas de release o los limites de seguridad. No agregues afirmaciones que no esten respaldadas por el repositorio, docs live del producto o evidencia publica de release.

## Estandar de completitud

Este README localizado no es una nota corta. Explica proposito, entrada, superficies del repositorio, validacion, limite de seguridad y referencias canonicas.

Referencia canonica: [README.md](README.md).
