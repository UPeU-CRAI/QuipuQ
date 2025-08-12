FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
RUN pnpm build --filter @quipuq/notification

FROM node:20-alpine AS runtime
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
COPY --from=build /app/services/notification/dist ./dist
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY services/notification/package.json ./package.json
RUN pnpm install --prod --frozen-lockfile --filter @quipuq/notification
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
