#!/bin/bash

# Run Vite dev server inside Docker (if you only want to start frontend)
docker run --rm -it \
  --name frontend-dev \
  -v "$PWD/frontend:/app" \
  -w /app \
  -p 5173:5173 \
  node:20 \
  bash -c "npm install && exec npm run dev -- --host"