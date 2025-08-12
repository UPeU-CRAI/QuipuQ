FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build --filter @quipuq/admin

FROM nginx:alpine
COPY --from=build /app/apps/admin/dist /usr/share/nginx/html/admin
