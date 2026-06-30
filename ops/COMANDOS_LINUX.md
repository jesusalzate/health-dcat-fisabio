# Instalacion y comandos para Linux

Esta guia es para levantar el entorno CKAN/FISABIO en Linux. Esta pensada principalmente para Ubuntu o Debian con Docker Engine y Docker Compose v2.

Referencias oficiales de Docker:

- Docker Engine en Ubuntu: https://docs.docker.com/engine/install/ubuntu/
- Docker Engine en Debian: https://docs.docker.com/engine/install/debian/
- Docker Engine general: https://docs.docker.com/engine/install/

En Linux conviene usar una variable para no depender de una ruta fija:

```bash
export PROJECT_DIR="$HOME/health-dcat-fisabio"
export CKAN_DOCKER_DIR="$PROJECT_DIR/vendor/ckan-docker"
```

Si el proyecto esta en otra ruta, cambiar `PROJECT_DIR`.

Puerto local:

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

## 1. Instalar dependencias basicas

```bash
sudo apt update
sudo apt install -y ca-certificates curl git rsync
```

## 2. Instalar Docker Engine y Compose

Eliminar paquetes conflictivos si existen:

```bash
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do
  sudo apt remove -y "$pkg" 2>/dev/null || true
done
```

Agregar la clave y el repositorio oficial de Docker:

```bash
. /etc/os-release

case "$ID" in
  ubuntu)
    DOCKER_REPO="https://download.docker.com/linux/ubuntu"
    DOCKER_CODENAME="${UBUNTU_CODENAME:-$VERSION_CODENAME}"
    ;;
  debian)
    DOCKER_REPO="https://download.docker.com/linux/debian"
    DOCKER_CODENAME="$VERSION_CODENAME"
    ;;
  *)
    echo "Distribucion no cubierta por esta guia: $ID"
    echo "Consulta https://docs.docker.com/engine/install/"
    exit 1
    ;;
esac

sudo apt update
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL "$DOCKER_REPO/gpg" -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

sudo tee /etc/apt/sources.list.d/docker.sources >/dev/null <<EOF
Types: deb
URIs: $DOCKER_REPO
Suites: $DOCKER_CODENAME
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
```

Instalar Docker:

```bash
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Comprobar:

```bash
sudo docker --version
sudo docker compose version
sudo docker run hello-world
```

## 3. Usar Docker sin sudo

```bash
sudo usermod -aG docker "$USER"
newgrp docker
```

Si `newgrp docker` no aplica el cambio correctamente, cerrar sesion y volver a entrar.

Comprobar sin `sudo`:

```bash
docker --version
docker compose version
docker run hello-world
```

## 4. Colocar el proyecto

Si el proyecto ya esta copiado en Linux:

```bash
export PROJECT_DIR="$HOME/health-dcat-fisabio"
cd "$PROJECT_DIR"
```

Si el proyecto esta en un repositorio Git, clonar:

```bash
git clone URL_DEL_REPOSITORIO "$HOME/health-dcat-fisabio"
export PROJECT_DIR="$HOME/health-dcat-fisabio"
cd "$PROJECT_DIR"
```

Si `vendor/ckan-docker` no existe, descargar CKAN Docker:

```bash
mkdir -p "$PROJECT_DIR/vendor"
git clone https://github.com/ckan/ckan-docker.git "$PROJECT_DIR/vendor/ckan-docker"
```

## 5. Preparar la copia de la extension para Docker

Docker debe ver una copia real de la extension dentro de `vendor/ckan-docker/src`.

```bash
export PROJECT_DIR="$HOME/health-dcat-fisabio"
export CKAN_DOCKER_DIR="$PROJECT_DIR/vendor/ckan-docker"

mkdir -p "$CKAN_DOCKER_DIR/src"
rsync -a --delete "$PROJECT_DIR/extensions/ckanext-fisabio/" "$CKAN_DOCKER_DIR/src/ckanext-fisabio/"
find "$CKAN_DOCKER_DIR/src/ckanext-fisabio" -name .DS_Store -delete
```

## 6. Revisar configuracion de CKAN

Entrar en CKAN Docker:

```bash
cd "$CKAN_DOCKER_DIR"
```

Si no existe `.env`, crearlo desde el ejemplo:

```bash
cp .env.example .env
```

Asegurar puerto `5001`, URL local, zona horaria y extension FISABIO:

```bash
perl -0pi -e 's/^CKAN_PORT_HOST=.*/CKAN_PORT_HOST=5001/m' .env
perl -0pi -e 's#^CKAN_SITE_URL=.*#CKAN_SITE_URL=http://localhost:5001#m' .env
perl -0pi -e 's/^TZ=.*/TZ=Europe\/Madrid/m' .env
perl -0pi -e 's/CKAN__PLUGINS="[^"]+"/CKAN__PLUGINS="image_view text_view datatables_view datastore fisabio_theme envvars"/' .env
```

Comprobar:

```bash
grep -E '^(CKAN_PORT_HOST|CKAN_SITE_URL|CKAN__PLUGINS|TZ|CKAN_SYSADMIN_NAME|CKAN_SYSADMIN_PASSWORD)=' .env
```

## 7. Primera instalacion del entorno

```bash
cd "$CKAN_DOCKER_DIR"
bin/compose build
bin/install_src
bin/compose up -d
```

Comprobar estado:

```bash
bin/compose ps
```

Abrir:

```text
http://localhost:5001
```

## 8. Volver a levantar el servicio

Usar estos comandos cuando Docker ya esta instalado y el entorno ya fue preparado antes:

```bash
export PROJECT_DIR="$HOME/health-dcat-fisabio"
export CKAN_DOCKER_DIR="$PROJECT_DIR/vendor/ckan-docker"
cd "$CKAN_DOCKER_DIR"
bin/compose up -d
bin/compose ps
```

## 9. Sincronizar cambios visuales

Cuando se cambie CSS, HTML, imagenes o plantillas:

```bash
export PROJECT_DIR="$HOME/health-dcat-fisabio"
export CKAN_DOCKER_DIR="$PROJECT_DIR/vendor/ckan-docker"

cd "$PROJECT_DIR"
rsync -a --delete extensions/ckanext-fisabio/ vendor/ckan-docker/src/ckanext-fisabio/

cd "$CKAN_DOCKER_DIR"
bin/compose restart ckan-dev
```

Si solo se quiere recargar rapidamente:

```bash
cd "$CKAN_DOCKER_DIR"
bin/reload
```

## 10. Cambios en dependencias, Dockerfile o configuracion

Si el cambio afecta dependencias Python:

```bash
cd "$CKAN_DOCKER_DIR"
bin/install_src
bin/compose restart ckan-dev
```

Si el cambio afecta Dockerfile:

```bash
cd "$CKAN_DOCKER_DIR"
bin/compose build ckan-dev
bin/compose up -d ckan-dev
```

Si el cambio afecta `.env`:

```bash
cd "$CKAN_DOCKER_DIR"
bin/compose up -d
```

## 11. Ver logs

```bash
cd "$CKAN_DOCKER_DIR"
bin/compose logs -f ckan-dev
```

## 12. Parar el entorno

```bash
cd "$CKAN_DOCKER_DIR"
bin/compose down
```

## 13. Publicar en la red local

Obtener la IP Linux:

```bash
hostname -I
```

Abrir desde otro equipo de la misma red:

```text
http://IP_DEL_EQUIPO_LINUX:5001
```

Si no funciona desde otro equipo, revisar firewall:

```bash
sudo ufw status
sudo ufw allow 5001/tcp
```

## 14. Comprobaciones utiles

Comprobar rutas principales:

```bash
for path in / /dataset /organization /about /contacto /espacio-datos /user/login; do
  printf '%-22s ' "$path"
  curl -s -o /dev/null -w '%{http_code}\n' "http://localhost:5001$path"
done
```

Comprobar API de CKAN:

```bash
curl -s http://localhost:5001/api/action/status_show | head -c 500
```
