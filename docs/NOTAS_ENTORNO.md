# Notas del entorno local

## Objetivo

Trabajar localmente en Mac sobre una nueva instalacion CKAN y reutilizar el tema FISABIO como extension.

## Flujo correcto

1. Levantar CKAN limpio con Docker en `http://localhost:5001`.
2. Instalar la extension `ckanext-fisabio`.
3. Activar `fisabio_theme` en `ckan.plugins`.
4. Probar portada, login, datasets y paginas informativas.
5. Modificar plantillas/CSS/imagenes.
6. Empaquetar la extension para reenviarla a FISABIO.

## Plugins indicados por FISABIO

```ini
ckan.plugins = harvest ckan_harvester dcat_rdf_harvester image_view text_view datatables_view datastore fisabio_theme dcat dcat_json_interface structured_data scheming_datasets
```

Para una primera prueba local se puede empezar con menos:

```ini
ckan.plugins = image_view text_view datatables_view datastore fisabio_theme
```

Despues se incorporan `dcat`, `scheming_datasets` y `harvest`.

## Rutas del tema

- `/proyecto`
- `/socios`
- `/resultados`
- `/solicitar-acceso`

## Advertencias

- No modificar el core de CKAN.
- No mezclar este trabajo con una web HTML/WordPress/React.
- No subir credenciales SMTP, contrasenas ni `.env` al repositorio.
- El formulario de solicitud necesita SMTP configurado para enviar correos reales.
- En este Mac el puerto `5000` estaba ocupado por `ControlCenter`; por eso CKAN usa `5001`.
