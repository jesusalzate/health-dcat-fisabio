# Health DCAT FISABIO - entorno de trabajo

Este proyecto es la base local para adaptar el portal CKAN de FISABIO.

## Estructura

- `extensions/ckanext-fisabio`: extension CKAN instalable con el tema FISABIO.
- `docs/Guia_Extensiones_CKAN_FISABIO.html`: guia recibida de FISABIO.
- `ops/COMANDOS_MAC.md`: instalacion y comandos para macOS.
- `ops/COMANDOS_LINUX.md`: instalacion y comandos para Linux.
- `ops/REGISTRO_COMANDOS_EJECUTADOS.md`: registro historico de comandos usados durante la preparacion inicial.
- `backups/`: copias de seguridad temporales, no versionadas.

Guias operativas:

- macOS: `ops/COMANDOS_MAC.md`
- Linux: `ops/COMANDOS_LINUX.md`
- Registro completo de comandos ejecutados: `ops/REGISTRO_COMANDOS_EJECUTADOS.md`

## Punto de partida

La extension base viene de `intrucciones_y_tema_fisabio.zip`.
La carpeta `ckanext/fisabio_theme` fue sustituida por la version mas reciente incluida en `fisabio_theme.zip`.

Esto significa que se conserva el paquete instalable (`setup.py`) y se usan las plantillas, CSS e imagenes mas actuales.

## Versiones objetivo

- CKAN: 2.11.x
- PostgreSQL: version estable actual, a confirmar con FISABIO para produccion
- Solr: 9.10.1
- Redis: version estable

## Archivos que normalmente se modifican

- `extensions/ckanext-fisabio/ckanext/fisabio_theme/fanstatic/fisabio.css`
- `extensions/ckanext-fisabio/ckanext/fisabio_theme/templates/header.html`
- `extensions/ckanext-fisabio/ckanext/fisabio_theme/templates/footer.html`
- `extensions/ckanext-fisabio/ckanext/fisabio_theme/templates/home/index.html`
- `extensions/ckanext-fisabio/ckanext/fisabio_theme/templates/fisabio_theme/*.html`
- `extensions/ckanext-fisabio/ckanext/fisabio_theme/public/*`

## Siguiente paso cuando Docker este instalado

Comprobar que Docker funciona:

```bash
docker --version
docker compose version
```

El entorno local quedo configurado en `http://localhost:5001`, porque el puerto `5000` estaba ocupado por macOS.

La extension fuente esta en `extensions/ckanext-fisabio`. Para que Docker la vea, tambien hay una copia en `vendor/ckan-docker/src/ckanext-fisabio`.

Cuando se modifique el tema, sincronizar la copia Docker:

```bash
cd /Users/alejo/Documents/health-dcat-fisabio
rsync -a --delete extensions/ckanext-fisabio/ vendor/ckan-docker/src/ckanext-fisabio/
```

Para instrucciones completas de instalacion, arranque, reinicio, logs y publicacion en red local, usar la guia correspondiente:

- `ops/COMANDOS_MAC.md`
- `ops/COMANDOS_LINUX.md`
