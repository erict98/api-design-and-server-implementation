import express, { Request, Response, NextFunction, Application } from 'express';
import userRouter from './user/route'
import businessRouter from './business/route'
import usersJSON from './users.json'
import businessesJSON from './businesses.json'
import { Data } from './data';

const app: Application = express();
const PORT: number = 6000;

var collection: Data = {
    users = usersJSON
}

for (let i = 0; i < usersJSON.length; i++) {
    let data = usersJSON[i];
    let name = data['name']
    console.log(collection)
}

app.get('/', (req:Request, res:Response):void => {
    res.send("HOME PAGE")
})

app.listen(PORT, ():void => {
    console.log(`Server is running on http://localhost:${PORT}.`)
})

//app.use('/users', userRouter(data))

app.use('/businesses', businessRouter(collection))




