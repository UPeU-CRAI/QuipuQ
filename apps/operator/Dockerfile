FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/operator/package.json apps/operator/
RUN pnpm install --filter @quipuq/operator --frozen-lockfile
COPY . .
RUN pnpm build --filter @quipuq/operator

FROM nginx:alpine
COPY --from=build /app/apps/operator/dist /usr/share/nginx/html/operator
