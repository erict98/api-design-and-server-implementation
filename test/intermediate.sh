docker run -d -it                           \
    --name mongo-server                     \
    --network test-network                  \
    -p 27017:27017                          \
    -e MONGO_INITDB_ROOT_USERNAME=root      \
    -e MONGO_INITDB_ROOT_PASSWORD=password  \
    mongo:latest                            \

mongosh --host mongo-server                 \
    --username root                         \
    --password password                     