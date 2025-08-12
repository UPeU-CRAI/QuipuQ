# QuipuQ

Monorepo del sistema de gestión de colas **QuipuQ**.

## Quickstart

```bash
cd infra/docker
cp .env.example .env
docker compose up -d --build
./smoke.sh # optional smoke test
```

Para guías completas, variables de entorno y arquitectura visita la [documentación](./docs).

## Estructura del repositorio

- `apps/` – aplicaciones React (admin, operator, kiosk-touch, monitor)
- `services/` – servicios Node/Nest (api, notification, reniec-adapter)
- `packages/` – paquetes compartidos
- `infra/` – configuraciones de infraestructura (docker, nginx, k8s)
- `docs/` – sitio Docusaurus

## Cómo contribuir

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para lineamientos de contribución.
