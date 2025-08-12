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
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY services/api/package.json ./package.json
COPY services/api/prisma ./prisma
RUN pnpm install --prod --frozen-lockfile --filter @quipuq/api
ENV NODE_ENV=production
CMD sh -c "pnpm prisma migrate deploy && if [ \"$SEED_ON_START\" = \"true\" ]; then pnpm prisma db seed; fi && node dist/main.js"
