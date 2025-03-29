# TCG_Web_Scrapper
POC for TCG web scrapper

# Overview
    This is a POC of a TCG web scrapper.

    Tech stack:
     - Vue 3: frontend framework
     - Vite: frontend build tool for dev server
     - Boostrap 5: CSS framework
     - Docker: containerize the application
     - Node.js 20: JS runtime env, very conveniently abstracted by Docker
     - Express.js: JS framework for backend server with easy middleware and routing

     NOT STARTED YET
     - Webscrapper seperate, python + selenium(?)

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


    