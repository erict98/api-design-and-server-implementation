import express, {Request, Response, NextFunction, Application} from 'express';
import userRouter from './user/route'
import businessRouter from './business/route'

const app: Application = express();
const PORT: number = 3000;

app.get('/', (req:Request, res:Response):void => {
    res.send("HOME PAGE")
})

app.listen(PORT, ():void => {
    console.log(`Server is running on http://localhost:${PORT}.`)
})

app.use('/users', userRouter)
app.use('/businesses', businessRouter)




