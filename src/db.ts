import { MongoClient } from 'mongodb'

const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || 27017;
const mongoUser = process.env.MONGO_USER || 'dbAdmin';
const mongoPassword = process.env.MONGO_PASSWORD || 'password';
const mongoDBName = process.env.MONGO_DB_NAME || 'dex';
const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`

console.log(`Connection string: ${mongoURI}`)
var mongoclient = new MongoClient(mongoURI)

export { mongoclient }