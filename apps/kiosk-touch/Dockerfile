# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm i -g pnpm && pnpm install --prod && pnpm build

# Runtime stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
