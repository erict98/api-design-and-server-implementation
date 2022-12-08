import express, { Request, Response, NextFunction, Application } from 'express';
import bodyParser from 'body-parser';

// Creates the Express application
const app: Application = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: true
}));

// Default home page
app.get('/', (req:Request, res:Response):void => {
    res.send(`Please make API requests to http://localhost:${PORT}`)
})

app.listen(PORT, ():void => {
    console.log(`Server is running on http://localhost:${PORT}`)
})