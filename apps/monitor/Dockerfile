FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/monitor/package.json apps/monitor/
RUN pnpm install --filter @quipuq/monitor --frozen-lockfile
COPY . .
RUN pnpm build --filter @quipuq/monitor

FROM nginx:alpine
COPY --from=build /app/apps/monitor/dist /usr/share/nginx/html/monitor
