#!/bin/bash
# <project>/docker/mongo
docker compose down
docker compose up -d
# mongosh --username root --password password
