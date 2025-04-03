#!/bin/bash

# Run scraper inside a temporary container
docker run --rm -it \
  --name scraper-dev \
  -v "$PWD/scraper:/app" \
  -w /app \
  node:20 \
  bash -c "npm install && node index.js"