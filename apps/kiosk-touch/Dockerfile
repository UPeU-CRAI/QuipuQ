FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/kiosk-touch/package.json apps/kiosk-touch/
RUN pnpm install --filter @quipuq/kiosk-touch --frozen-lockfile
COPY . .
RUN pnpm build --filter @quipuq/kiosk-touch

FROM nginx:alpine
COPY --from=build /app/apps/kiosk-touch/dist /usr/share/nginx/html/kiosk
