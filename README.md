# TCG_Web_Scrapper
POC for TCG web scrapper

# Overview
    This is a POC of a TCG web scrapper.

    Tech stack:
     - Vue 3: frontend framework
     - Vite: frontend build tool for dev server
     - Boostrap 5: CSS framework
     - Docker: we love docker <3, can't live without containerised apps anymore
     - Node.js 20: JS runtime env, very conveniently abstracted by Docker

     NOT STARTED YET
     - express.js for backend maybe (?)

# Set up instructions

    Docker has abstracted all the boostrapping and I have already initilised the node for package.json.
    The Docker image will contain all the Node runtime env and the set up script will pull the image,
    as well as npm install all dependencies and run the local server.

    Local server port is set to 5173.

    Hence, to start this application, all you need to do is run the following:

        - "./runLocalServer.sh"
    