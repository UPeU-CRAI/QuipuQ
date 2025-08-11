# QuipuQ

Sistema de Gestión de Colas de la UPeU.

> Versión actual: 0.0.1 — ver [Historial de Versiones](CHANGELOG.md)

## Características

- Monitores con visualización en tiempo real y plantillas personalizables.
- Kiosco táctil para autogestión de turnos con integración a RENIEC.
- Panel de operador para atención, cambio de colas y derivaciones.
- Administración centralizada de colas, áreas, operadores y plantillas.
- APIs REST para integración con sistemas internos y servicios externos.

## Estructura

- `apps/` – aplicaciones React (admin, operator, kiosk-touch, monitor)
- `services/` – microservicios Node/Nest (api, notification, reniec-adapter)
- `packages/` – paquetes compartidos (ui, types, sdk)
- `infra/` – configuraciones de infraestructura (docker, nginx, db, k8s)
- `docs/` – documentación (Docusaurus)

## Documentación

- [Product Requirements Document](docs/PRD.md)
- [Historial de Versiones](CHANGELOG.md)
- [Manual de Instalación con Docker](docs/INSTALACION_DOCKER.md)

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
