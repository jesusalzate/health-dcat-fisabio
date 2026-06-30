# Instalacion y comandos para macOS

Esta guia es para levantar el entorno CKAN/FISABIO en Mac.

Proyecto local:

```text
/Users/alejo/Documents/health-dcat-fisabio
```

CKAN Docker:

```text
/Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
```

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

Ver tambien el registro completo en `ops/REGISTRO_COMANDOS_EJECUTADOS.md`.

## 1. Instalar Docker Desktop

1. Instalar Docker Desktop para Mac desde la web oficial de Docker.
2. Abrir Docker Desktop.
3. Esperar a que Docker indique que esta arrancado.

Si el comando `docker` no aparece en la terminal, ejecutar:

```bash
mkdir -p ~/.docker/cli-plugins ~/.local/bin
ln -sf /Applications/Docker.app/Contents/Resources/cli-plugins/docker-compose ~/.docker/cli-plugins/docker-compose
ln -sf /Applications/Docker.app/Contents/Resources/bin/docker ~/.local/bin/docker
```

Despues, en cada terminal donde se vaya a trabajar:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
```

Comprobar Docker:

```bash
docker --version
docker compose version
docker run hello-world
```

## 2. Abrir la carpeta del proyecto

```bash
cd /Users/alejo/Documents/health-dcat-fisabio
```

## 3. Entrar en la base Docker de CKAN

```bash
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
```

## 4. Primera instalacion del entorno

Estos comandos solo hacen falta la primera vez, o si se reconstruye el entorno desde cero.

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
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

## 5. Volver a levantar el servicio

Usar estos comandos cuando Docker ya esta instalado y el entorno ya fue preparado antes:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/compose up -d
bin/compose ps
```

## 6. Sincronizar cambios visuales

Los archivos fuente del tema estan aqui:

```text
/Users/alejo/Documents/health-dcat-fisabio/extensions/ckanext-fisabio
```

Docker usa esta copia:

```text
/Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker/src/ckanext-fisabio
```

Cuando se cambie CSS, HTML, imagenes o plantillas, sincronizar:

```bash
cd /Users/alejo/Documents/health-dcat-fisabio
rsync -a --delete extensions/ckanext-fisabio/ vendor/ckan-docker/src/ckanext-fisabio/
```

Despues reiniciar CKAN:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/compose restart ckan-dev
```

Si solo se quiere recargar rapidamente:

```bash
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/reload
```

## 7. Cambios en dependencias, Dockerfile o configuracion

Si el cambio afecta dependencias Python:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/install_src
bin/compose restart ckan-dev
```

Si el cambio afecta Dockerfile:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/compose build ckan-dev
bin/compose up -d ckan-dev
```

Si el cambio afecta `.env`:

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/compose up -d
```

## 8. Ver logs

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/compose logs -f ckan-dev
```

## 9. Parar el entorno

```bash
export PATH="$HOME/.local/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
cd /Users/alejo/Documents/health-dcat-fisabio/vendor/ckan-docker
bin/compose down
```

## 10. Publicar en la red local

El contenedor ya esta publicado en el puerto `5001`. Para saber la IP del Mac:

```bash
ipconfig getifaddr en0
```

Si estas conectado por cable y no sale IP, probar:

```bash
ipconfig getifaddr en1
```

Abrir desde otro equipo de la misma red:

```text
http://IP_DEL_MAC:5001
```

Ejemplo usado durante el desarrollo:

```text
http://172.24.76.177:5001
```

Si no funciona desde otro equipo, revisar que Docker Desktop este abierto y que el firewall de macOS permita conexiones entrantes.

## 11. Comprobaciones utiles

Comprobar rutas principales:

```bash
for path in / /dataset /organization /about /contacto /espacio-datos /user/login; do
  printf '%-22s ' "$path"
  /usr/bin/curl -s -o /dev/null -w '%{http_code}\n' "http://localhost:5001$path"
done
```

Comprobar API de CKAN:

```bash
/usr/bin/curl -s http://localhost:5001/api/action/status_show | head -c 500
```
