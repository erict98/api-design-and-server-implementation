import express, { Request, Response, NextFunction, Application } from 'express';
import bodyParser from 'body-parser';
import { mongoclient } from './db'

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

// Creates the database connection
var client = mongoclient
async function main() {
    try {
        await client.connect()
        app.listen(PORT, ():void => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })

        const db = client.db('dex')
        const collection = db.collection('SV')

        // Binds the middlewares to instance of app
        const dataRouter = require('./routes/dataRouter')
        app.use('/data', dataRouter(collection))

    } catch (err) {
        console.error(err)
    }
}
main()

// Error-handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})