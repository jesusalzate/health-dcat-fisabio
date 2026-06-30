# Registro de comandos ejecutados

Este archivo recoge los comandos usados para preparar el entorno local CKAN/FISABIO en Mac.

## 1. Inspeccion inicial de archivos recibidos

```bash
unzip -l /Users/alejo/Downloads/fisabio_theme.zip | sed -n '1,160p'
unzip -l /Users/alejo/Downloads/intrucciones_y_tema_fisabio.zip | sed -n '1,220p'
file /Users/alejo/Downloads/fisabio_theme.zip /Users/alejo/Downloads/intrucciones_y_tema_fisabio.zip
```

```bash
rm -rf /tmp/fisabio_inspect
mkdir -p /tmp/fisabio_inspect
unzip -q /Users/alejo/Downloads/intrucciones_y_tema_fisabio.zip -d /tmp/fisabio_inspect
unzip -q /Users/alejo/Downloads/fisabio_theme.zip -d /tmp/fisabio_inspect/latest_theme
find /tmp/fisabio_inspect -maxdepth 4 -type f | sort
```

```bash
sed -n '1,220p' /tmp/fisabio_inspect/intrucciones_y_tema_fisabio/ckanext-fisabio/setup.py
sed -n '1,260p' /tmp/fisabio_inspect/intrucciones_y_tema_fisabio/ckanext-fisabio/ckanext/fisabio_theme/plugin.py
sed -n '1,300p' /tmp/fisabio_inspect/latest_theme/fisabio_theme/plugin.py
```

```bash
python3 - <<'PY'
import re, html
from pathlib import Path
p=Path('/tmp/fisabio_inspect/intrucciones_y_tema_fisabio/Guia_Extensiones_CKAN_FISABIO.html')
s=p.read_text(errors='ignore')
s=re.sub(r'<(script|style).*?</\1>','',s, flags=re.S|re.I)
s=re.sub(r'<br\s*/?>','\n',s, flags=re.I)
s=re.sub(r'</(p|h[1-6]|li|pre|div|tr)>','\n',s, flags=re.I)
s=re.sub(r'<[^>]+>','',s)
s=html.unescape(s)
lines=[ln.strip() for ln in s.splitlines() if ln.strip()]
print('\n'.join(lines[:260]))
PY
```

## 2. Comprobacion de la guia enviada

```bash
ls -la /Users/alejo/Downloads/intrucciones_y_tema_fisabio\ 2/Guia_Extensiones_CKAN_FISABIO.html
```

```bash
shasum -a 256 \
  /Users/alejo/Downloads/intrucciones_y_tema_fisabio\ 2/Guia_Extensiones_CKAN_FISABIO.html \
  /Users/alejo/Documents/health-dcat-fisabio/docs/Guia_Extensiones_CKAN_FISABIO.html
```

```bash
python3 - <<'PY'
import re
from pathlib import Path
for p in [
    Path('/Users/alejo/Downloads/intrucciones_y_tema_fisabio 2/Guia_Extensiones_CKAN_FISABIO.html'),
    Path('/Users/alejo/Documents/health-dcat-fisabio/docs/Guia_Extensiones_CKAN_FISABIO.html'),
]:
    s=p.read_text(errors='ignore')
    m=re.search(r'<title>(.*?)</title>', s, re.I|re.S)
    print(p)
    print('bytes', len(s), 'title', m.group(1).strip() if m else 'sin title')
PY
```

## 3. Preparacion de carpeta de trabajo

```bash
mkdir -p /Users/alejo/Documents/health-dcat-fisabio/{extensions,docs,ops,backups}
rm -rf /tmp/fisabio_setup
mkdir -p /tmp/fisabio_setup
unzip -q /Users/alejo/Downloads/intrucciones_y_tema_fisabio.zip -d /tmp/fisabio_setup
unzip -q /Users/alejo/Downloads/fisabio_theme.zip -d /tmp/fisabio_setup/latest
cp -R /tmp/fisabio_setup/intrucciones_y_tema_fisabio/ckanext-fisabio /Users/alejo/Documents/health-dcat-fisabio/extensions/
rm -rf /Users/alejo/Documents/health-dcat-fisabio/extensions/ckanext-fisabio/ckanext/fisabio_theme
cp -R /tmp/fisabio_setup/latest/fisabio_theme /Users/alejo/Documents/health-dcat-fisabio/extensions/ckanext-fisabio/ckanext/fisabio_theme
cp /tmp/fisabio_setup/intrucciones_y_tema_fisabio/Guia_Extensiones_CKAN_FISABIO.html /Users/alejo/Documents/health-dcat-fisabio/docs/
find /Users/alejo/Documents/health-dcat-fisabio -maxdepth 4 -type f | sort | sed -n '1,120p'
```

```bash
find /Users/alejo/Documents/health-dcat-fisabio/extensions/ckanext-fisabio/ckanext/fisabio_theme \
  -name '__pycache__' -type d -prune -exec rm -rf {} +
find /Users/alejo/Documents/health-dcat-fisabio/extensions/ckanext-fisabio/ckanext/fisabio_theme \
  -maxdepth 3 -type f | sort | sed -n '1,160p'
```

## 4. Inicializacion de Git y descarga de CKAN Docker

```bash
cd /Users/alejo/Documents/health-dcat-fisabio
git init
git status --short
mkdir -p vendor
git clone https://github.com/ckan/ckan-docker.git vendor/ckan-docker
git -C vendor/ckan-docker rev-parse --abbrev-ref HEAD
find vendor/ckan-docker -maxdepth 2 -type f | sort | sed -n '1,120p'
```

```bash
sed -n '1,240p' vendor/ckan-docker/README.md
sed -n '1,220p' vendor/ckan-docker/docker-compose.yml
sed -n '1,220p' vendor/ckan-docker/.env.example
sed -n '1,260p' vendor/ckan-docker/docker-compose.dev.yml
sed -n '1,160p' vendor/ckan-docker/ckan/Dockerfile.dev
sed -n '1,180p' vendor/ckan-docker/ckan/Dockerfile
```

## 5. Configuracion inicial de CKAN Docker

Primero se intento usar un enlace simbolico:

```bash
mkdir -p vendor/ckan-docker/src
rm -rf vendor/ckan-docker/src/ckanext-fisabio
ln -s /Users/alejo/Documents/health-dcat-fisabio/extensions/ckanext-fisabio vendor/ckan-docker/src/ckanext-fisabio
cp vendor/ckan-docker/.env.example vendor/ckan-docker/.env
perl -0pi -e 's/CKAN_SITE_URL=https:\/\/localhost:8443/CKAN_SITE_URL=http:\/\/localhost:5000/; s/CKAN__DATAPUSHER__CALLBACK_URL_BASE=http:\/\/ckan:5000/CKAN__DATAPUSHER__CALLBACK_URL_BASE=http:\/\/ckan-dev:5000/; s/CKAN__PLUGINS="[^"]+"/CKAN__PLUGINS="image_view text_view datatables_view datastore fisabio_theme envvars"/; s/TZ=UTC/TZ=Europe\/Madrid/; s/CKAN_SYSADMIN_EMAIL=your_email@example.com/CKAN_SYSADMIN_EMAIL=admin@example.com/' vendor/ckan-docker/.env
perl -0pi -e 's/CKAN_VERSION=2\.10\.0/CKAN_VERSION=2.11/; s/SOLR_IMAGE_VERSION=2\.10-solr9/SOLR_IMAGE_VERSION=2.11-solr9/; s/CKAN_SYSADMIN_EMAIL=.*/CKAN_SYSADMIN_EMAIL=admin\@example.com/' vendor/ckan-docker/.env
grep -E '^(CKAN_SITE_URL|CKAN_VERSION|SOLR_IMAGE_VERSION|CKAN__PLUGINS|CKAN__DATAPUSHER__CALLBACK_URL_BASE|TZ|CKAN_SYSADMIN_NAME|CKAN_SYSADMIN_PASSWORD|CKAN_SYSADMIN_EMAIL)=' vendor/ckan-docker/.env
ls -la vendor/ckan-docker/src
```

Despues se corrigio el email:

```bash
perl -0pi -e 's/CKAN_SYSADMIN_EMAIL=.*/CKAN_SYSADMIN_EMAIL=admin\@example.com/' vendor/ckan-docker/.env
grep '^CKAN_SYSADMIN_EMAIL=' vendor/ckan-docker/.env
```

## 6. Preparacion del comando Docker en Mac

Al principio `docker` no estaba en el `PATH`:

```bash
docker --version
docker compose version
docker info --format '{{.ServerVersion}}'
```

Se localizaron los binarios de Docker Desktop:

```bash
ls -la /Applications/Docker.app/Contents/Resources/bin
ls -la /usr/local/bin/docker /opt/homebrew/bin/docker ~/.docker/bin/docker 2>/dev/null || true
find /Applications/Docker.app -name docker -type f 2>/dev/null | sed -n '1,20p'
```

Se probo Docker con ruta completa y se busco Compose:

```bash
/Applications/Docker.app/Contents/Resources/bin/docker --version
/Applications/Docker.app/Contents/Resources/bin/docker compose version
/Applications/Docker.app/Contents/Resources/bin/docker info --format '{{.ServerVersion}}'
find /Applications/Docker.app -iname '*compose*' -type f 2>/dev/null | sed -n '1,60p'
ls -la ~/.docker/cli-plugins /usr/local/lib/docker/cli-plugins /opt/homebrew/lib/docker/cli-plugins 2>/dev/null || true
ps aux | rg -i 'docker|com.docker' || true
```

Se creo un wrapper local y se abrio Docker Desktop:

```bash
mkdir -p ~/.docker/cli-plugins ~/.local/bin
ln -sf /Applications/Docker.app/Contents/Resources/cli-plugins/docker-compose ~/.docker/cli-plugins/docker-compose
ln -sf /Applications/Docker.app/Contents/Resources/bin/docker ~/.local/bin/docker
open -a Docker
~/.local/bin/docker compose version
```

Se espero a que Docker estuviera listo:

```bash
for i in {1..60}; do
  if ~/.local/bin/docker info >/tmp/docker-info.log 2>&1; then
    echo ready
    ~/.local/bin/docker info --format 'Server {{.ServerVersion}} / {{.OperatingSystem}}'
    exit 0
  fi
  sleep 2
done
echo 'not ready'
cat /tmp/docker-info.log
exit 1
```

## 7. Construccion de imagenes CKAN

Primer intento, fallido por falta del helper de credenciales en `PATH`:

```bash
export PATH="$HOME/.local/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/compose build
```

Intento correcto:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/compose build
```

## 8. Instalacion de la extension

Primer intento:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/install_src
```

Ese intento revelo que el symlink no era valido dentro del contenedor. Se sustituyo por una copia real:

```bash
cd /Users/alejo/Documents/health-dcat-fisabio
rm -rf vendor/ckan-docker/src/ckanext-fisabio
cp -R extensions/ckanext-fisabio vendor/ckan-docker/src/ckanext-fisabio
find vendor/ckan-docker/src/ckanext-fisabio -maxdepth 3 -type f | sort | sed -n '1,120p'
```

Se eliminaron archivos `.DS_Store` y se reinstalo:

```bash
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
find src/ckanext-fisabio -name .DS_Store -delete
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
bin/install_src
```

## 9. Arranque de CKAN

Primer arranque:

```bash
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
find src/ckanext-fisabio -name .DS_Store -delete
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
bin/compose up -d
```

Fallo porque el puerto `5000` estaba ocupado. Se comprobo con:

```bash
lsof -nP -iTCP:5000 -sTCP:LISTEN || true
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
bin/compose ps
```

Se cambio CKAN a `5001`:

```bash
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
perl -0pi -e 's/^CKAN_PORT_HOST=.*/CKAN_PORT_HOST=5001/m; s#^CKAN_SITE_URL=.*#CKAN_SITE_URL=http://localhost:5001#m' .env
grep -E '^(CKAN_PORT_HOST|CKAN_SITE_URL|CKAN__PLUGINS)=' .env
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
bin/compose up -d --remove-orphans
```

## 10. Verificaciones

Estado de contenedores:

```bash
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
bin/compose ps
```

Primera comprobacion HTTP:

```bash
for i in {1..60}; do
  code=$(/usr/bin/curl -s -o /tmp/ckan-home.html -w '%{http_code}' http://localhost:5001/ || true)
  echo "$i $code"
  [ "$code" = "200" ] && exit 0
  sleep 2
done
tail -n 80 /tmp/ckan-home.html
exit 1
```

Logs de CKAN:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
bin/compose logs --tail=80 ckan-dev
```

Rutas verificadas:

```bash
for path in / /proyecto /socios /resultados /solicitar-acceso /api/action/status_show; do
  printf '%-28s ' "$path"
  /usr/bin/curl -s -o /dev/null -w '%{http_code}\n' "http://localhost:5001$path"
done
```

Estado de salud:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
for i in {1..30}; do
  st=$(docker inspect -f '{{.State.Health.Status}}' ckan-docker-ckan-dev-1 2>/dev/null || echo unknown)
  echo "$i $st"
  [ "$st" = "healthy" ] && exit 0
  sleep 2
done
exit 1
```

API de estado:

```bash
/usr/bin/curl -s http://localhost:5001/api/action/status_show | head -c 500
```

## 11. Resultado final

El entorno quedo en:

```text
http://localhost:5001
```

Usuario admin inicial:

```text
ckan_admin
```

Contrasena inicial:

```text
test1234
```

La API confirmo:

```text
CKAN 2.11.5
plugins: image_view, text_view, datatables_view, datastore, fisabio_theme, envvars
```

