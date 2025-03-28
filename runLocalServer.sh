#!/bin/bash

# Run Vite dev server inside Docker
docker run --rm -it \
  -v "$PWD/frontend:/app" \
  -w /app \
  -p 5173:5173 \
  node:20 \
  bash -c "npm install && npm run dev -- --host"