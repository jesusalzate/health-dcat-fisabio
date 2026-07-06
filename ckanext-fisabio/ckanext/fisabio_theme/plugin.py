import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
from flask import Blueprint
import ckan.lib.formatters as formatters
import ckan.lib.helpers as _h

# --- MONKEY PATCH PARA EVITAR CRASHEOS DE PYTHON 3 CON HEALTHDCAT-AP ---
# La función nativa de CKAN falla con NoneType. La sobreescribimos en memoria global
# para proteger cualquier vista o extensión que intente parsear ficheros sin tamaño.
_original_localised_filesize = formatters.localised_filesize

def safe_localised_filesize(number):
    if number is None or str(number).strip() == '':
        return "Desconocido"
    try:
        return _original_localised_filesize(int(number))
    except (ValueError, TypeError):
        return "Desconocido"

formatters.localised_filesize = safe_localised_filesize
_h.localised_filesize = safe_localised_filesize
# ------------------------------------------------------------------------

# Definición del Blueprint para las páginas estáticas
fisabio_blueprint = Blueprint('fisabio_pages', __name__)

@fisabio_blueprint.route('/contacto')
def contacto():
    return toolkit.render('fisabio_theme/contacto.html')

def get_organizations(limit=5):
    """Devuelve las organizaciones con sus conjuntos de datos."""
    try:
        orgs = toolkit.get_action('organization_list')(
            {}, {'all_fields': True, 'include_dataset_count': True, 'limit': limit}
        )
        return orgs
    except Exception:
        return []

def get_recent_datasets(limit=6):
    """Devuelve los conjuntos de datos más recientes."""
    try:
        result = toolkit.get_action('package_search')(
            {}, {'q': '*:*', 'rows': limit, 'sort': 'metadata_modified desc'}
        )
        return result.get('results', [])
    except Exception:
        return []

def get_resource_count():
    """Devuelve el número total de recursos publicados en el portal."""
    try:
        result = toolkit.get_action('resource_search')({}, {'query': 'name:*', 'limit': 0})
        return result.get('count', 0)
    except Exception:
        return 0

def get_tag_count():
    """Devuelve el número total de etiquetas distintas en el portal."""
    try:
        tags = toolkit.get_action('tag_list')({}, {})
        return len(tags)
    except Exception:
        return 0

def get_popular_tags(limit=6):
    """Devuelve las etiquetas más utilizadas en conjuntos de datos, ordenadas por frecuencia."""
    try:
        result = toolkit.get_action('package_search')(
            {}, {
                'q': '*:*',
                'rows': 0,
                'facet.field': ['tags'],
                'facet.limit': limit,
            }
        )
        return result.get('search_facets', {}).get('tags', {}).get('items', [])
    except Exception:
        return []

def get_resource_formats(limit=10):
    """Devuelve los formatos de recursos realmente disponibles en el portal."""
    try:
        result = toolkit.get_action('package_search')(
            {}, {
                'q': '*:*',
                'rows': 0,
                'facet.field': ['res_format'],
                'facet.limit': limit,
            }
        )
        items = result.get('search_facets', {}).get('res_format', {}).get('items', [])
        return [item['name'] for item in items if item.get('name')]
    except Exception:
        return []

class FisabioThemePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)
    plugins.implements(plugins.IBlueprint)

    def update_config(self, config):
        toolkit.add_template_directory(config, 'templates')
        toolkit.add_public_directory(config, 'public')
        toolkit.add_resource('fanstatic', 'fisabio_theme')

    def get_helpers(self):
        return {
            'fisabio_get_organizations': get_organizations,
            'fisabio_get_recent_datasets': get_recent_datasets,
            'fisabio_get_popular_tags': get_popular_tags,
            'fisabio_get_resource_formats': get_resource_formats,
            'fisabio_get_resource_count': get_resource_count,
            'fisabio_get_tag_count': get_tag_count,
        }

    def get_blueprint(self):
        """Devuelve los Blueprints de Flask a registrar en CKAN."""
        return [fisabio_blueprint]
