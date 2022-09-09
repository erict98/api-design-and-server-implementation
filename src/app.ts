import express, { Request, Response, NextFunction, Application } from 'express';
import userRouter from './user/route'
import businessRouter from './business/route'
import usersJSON from './users.json'
import businessesJSON from './businesses.json'
import { Collection } from './data';
import bodyParser from 'body-parser';

const app: Application = express();
const PORT: number = 3000;
app.use(bodyParser.urlencoded({
    extended: true
}));

// Reads from JSON files to populate the Object
var collection: Collection = {
    users : usersJSON,
    businesses : businessesJSON,
}

app.get('/', (req:Request, res:Response):void => {
    res.send("HOME PAGE")
})

app.listen(PORT, ():void => {
    console.log(`Server is running on http://localhost:${PORT}.`)
})

app.use('/users', userRouter(collection))

app.use('/businesses', businessRouter(collection))




