#!/bin/bash

# Run Vite dev server inside Docker (if you only want to start frontend)
# -rm flag to remove container when stopped for clean dev loop.
# IMPORTANT exec npm run dev, force dev (VITE as defined in the package.json), to run as the main process not a child process,
# this ensures that when we ctrl+c to end the process, it directly ends the main VITE process, so we can ensure a clean server shutdown.
docker run --rm -it \
  --name frontend-dev \
  -v "$PWD/frontend:/app" \
  -w /app \
  -p 5173:5173 \
  node:20 \
  bash -c "npm install && exec npm run dev -- --host"