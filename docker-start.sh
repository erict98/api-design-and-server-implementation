#!/bin/bash
# <project>/docker/mongo
docker compose down
docker compose up -d
mongoimport -u dbAdmin -p password --db dex --collection SV --file .mongo/var/pokemon.JSON
# mongosh --username root --password password
# --uri "mongodb://root:password@localhost:27017/dex"

# docker-compose call script https://www.reddit.com/r/docker/comments/pyy1fq/how_does_one_run_a_python_script_on_dockercompose/