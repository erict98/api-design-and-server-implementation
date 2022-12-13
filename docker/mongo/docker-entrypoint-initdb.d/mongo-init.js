/* Please refer to the docs:
 https://www.mongodb.com/docs/v5.0/tutorial/write-scripts-for-the-mongo-shell/
 https://www.mongodb.com/docs/v5.0/reference/mongo-shell/
 */

// DB authorization
db.auth('root', 'password')

// Select DB
db = db.getSiblingDB('dex')

db.createUser({
        'user': 'dbAdmin',
        'pwd': 'password',
        roles: [{
                role: 'readWrite',
                db: 'dex'}]
})

db.createCollection('SV')