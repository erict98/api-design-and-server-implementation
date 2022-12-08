'''
collection of basic commands for rudimentary testing, i.e., are the containers online and reachable
'''
# creates the network
docker network rm test-network
docker network create test-network

# creates mongodb in the test network
docker run -d -it                           \
    --name mongo-server                     \
    --network test-network                  \
    -p 27017:27017                          \
    -e MONGO_INITDB_ROOT_USERNAME=root      \
    -e MONGO_INITDB_ROOT_PASSWORD=password  \
    mongo:latest                            

# command to MongoDB
mongosh                                 \
    --username root                     \
    --password password                 

use dex
db.createUser({
        user: 'dbAdmin',
        pwd: 'password',
        roles: [{
                role: 'readWrite',
                db: 'dex'}]
})
db.createCollection('SV')
db.SV.insertOne({'pokemon':'information'})

# builds the web server image
docker build -t web .
# creates web server in the test network
docker run -d -it                       \
    --name web-server                   \
    --network test-network              \
    -p 3000:3000                        \
    -e PORT=3000                        \
    web:latest