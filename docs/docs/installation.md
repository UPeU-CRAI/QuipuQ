# Manual de Instalación con Docker

Este documento describe cómo preparar un entorno local de **QuipuQ** utilizando Docker.

## Requisitos previos

- [Docker](https://docs.docker.com/get-docker/) 24+
- [Docker Compose](https://docs.docker.com/compose/install/) 2.20+
- Git

## Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/your-org/QuipuQ.git
   cd QuipuQ
   ```

2. **Configurar variables de entorno**
   ```bash
   cd infra/docker
   cp .env.example .env
   ```
   Ajusta los valores de `.env` según tu entorno si es necesario.

   ### Variables de entorno
   El archivo `.env.example` incluye valores para:
   - `DATABASE_URL`
   - `REDIS_URL`
   - `OIDC_ISSUER_URL`, `OIDC_CLIENT_ID`, `OIDC_CLIENT_SECRET`, `OIDC_REDIRECT_URI`
   - `RENIEC_BASE_URL`, `RENIEC_API_KEY`, `RENIEC_TIMEOUT_MS`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `WEBHOOK_URL`
   - `TENANT_DEFAULT`, `SEED_ON_START`
   - `API_PORT`, `NOTIFICATION_PORT`, `RENIEC_ADAPTER_PORT`
   - `PUBLIC_BASE_URL`

3. **Levantar los servicios**
   ```bash
   docker compose up -d
   ```
   Esto iniciará PostgreSQL, Redis y los servicios definidos en `docker-compose.yml`.

4. **Verificar el estado de los contenedores**
   ```bash
   docker compose ps
   ```

5. **Detener los servicios**
   ```bash
   docker compose down
   ```

## Notas

- Los volúmenes de Docker almacenan los datos de la base de datos y se conservan entre reinicios.
- Para reconstruir las imágenes después de cambios, usa `docker compose build`.
