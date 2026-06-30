from setuptools import setup, find_packages

setup(
    name='ckanext-fisabio_theme',
    version='2.0.0',
    description='CKAN theme for FISABIO',
    packages=find_packages(exclude=['ez_setup']),
    include_package_data=True,
    zip_safe=False,
    entry_points={
        'ckan.plugins': [
            'fisabio_theme = ckanext.fisabio_theme.plugin:FisabioThemePlugin',
        ],
    },
)
