#!/bin/bash
# <project>/docker/mongo
docker compose down
docker compose up -d
#mongoimport -u dbAdmin -p password --db dex --collection SV --file .mongo/var/pokemon.JSON
# mongosh --username root --password password
