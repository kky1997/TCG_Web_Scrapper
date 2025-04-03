#!/bin/bash

# Run scraper inside a temporary container
# NOTE revisit later: currently this is really slow since puppeteer is quite large. I think it is caching the chrome install though....
docker run --rm -it \
  --name scraper-dev \
  -v "$PWD/scraper:/app" \
  -w /app \
  ghcr.io/puppeteer/puppeteer:latest \
  bash -c "npm install && npx puppeteer browsers install chrome && node index.js"
