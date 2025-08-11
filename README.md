# QuipuQ

Monorepo para el Sistema de Gestión de Colas de la UPeU.

## Estructura

- `apps/` – aplicaciones React (admin, operator, kiosk-touch, monitor)
- `services/` – microservicios Node/Nest (api, notification, reniec-adapter)
- `packages/` – paquetes compartidos (ui, types, sdk)
- `infra/` – configuraciones de infraestructura (docker, nginx, db, k8s)
- `docs/` – documentación (Docusaurus)

## Requisitos

- Node.js 20+
- pnpm

## Comandos

Instalar dependencias:

```bash
pnpm install
```

Modo desarrollo (ejemplo para admin):

```bash
pnpm --filter @quipuq/admin dev
```

Construir todo:

```bash
pnpm build
```

### Docker

En `infra/docker` se incluye un `docker-compose.yml` para levantar PostgreSQL, Redis y los servicios básicos.

```bash
cd infra/docker
cp .env.example .env
docker compose up -d
```
