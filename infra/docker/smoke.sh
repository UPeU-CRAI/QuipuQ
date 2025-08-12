#!/usr/bin/env bash
set -euo pipefail

# Wait for containers to report healthy
required=(api notification reniec-adapter nginx)
for svc in "${required[@]}"; do
  printf 'Waiting for %s to be healthy...\n' "$svc"
  until [ "$(docker compose ps -q "$svc" 2>/dev/null)" ] && \
        [ "$(docker inspect -f '{{.State.Health.Status}}' $(docker compose ps -q "$svc"))" = "healthy" ]; do
    sleep 1
  done
  printf '%s healthy\n' "$svc"
done

# Basic health endpoint check
curl -fsSL http://localhost:8080/api/health

# TODO: add ticket creation and WebSocket verification
