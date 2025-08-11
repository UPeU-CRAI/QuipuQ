FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
RUN pnpm build --filter @quipuq/api

FROM node:20-alpine AS runtime
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
COPY --from=build /app/services/api/dist ./dist
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY services/api/package.json ./
COPY prisma ./prisma
RUN pnpm install --prod --filter @quipuq/api --frozen-lockfile
ENV NODE_ENV=production
CMD sh -c "pnpm prisma migrate deploy && node dist/main.js"
