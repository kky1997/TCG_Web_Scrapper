# TCG_Web_Scrapper
POC for TCG web scrapper

# Overview
    This is a POC of a TCG web scrapper.

    Tech stack:
     - Vue 3: frontend framework
     - Vite: frontend build tool for dev server
     - Vue-Router: set up routing for multiple views
     - Boostrap 5: CSS framework
     - Docker: containerize the application
     - Node.js 20: JS runtime env, very conveniently abstracted by Docker
     - Express.js: JS framework for backend server with easy middleware and routing
     - Puppeteer + chrome headless browser for web scraping
     - Firebase Authentication for sign up and sign in

# Set up instructions

    Docker has abstracted all the boostrapping and I have already initilised the node for package.json.
    The Docker image will contain all the Node runtime env and the set up script will pull the image,
    as well as npm install all dependencies and run the local server.

    Frontend (vite server) : port 5173
    Backend (express.js server): port 3000
    PostgresSQL DB: port 5432 (auto defined by default)
    pgAdmin GUI... for much easier DB management: port 5050

    Hence, to start this application, all you need to do is run the following:

        - "./runLocalBackend.sh" (starts backend express server + pgadmin GUI + postgresSQL db within 1 container)
        - "./runLocalServer.sh" (starts frontend dev server via vite)

# Notes

    Have been manually creating package.json files with my dependencies and running something like :

        docker run --rm -it -v "$PWD/scraper:/app" -w /app node:20 bash -c "npm init -y && npm install puppeteer"
    
    the above initilises the node.js directory, creating the package-lock.json

    Additionally, for the frontend script (runLocalServer.sh), i'm creating a container dynamically from the node:20 image (pulled).
    This container is deleted when stopped, so there is no seperate image for the frontend.

    The backend does build a custom image (locally), which the container is based off each time. This is built with the provided docker-compose.yml

    