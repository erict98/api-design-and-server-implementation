import { Request, Response } from 'express'

/*
Simple HTTP request to database that returns all the data
*/
export function getData(collection: any) {
    return async function(req: Request, res: Response) {
        res.send(await collection.find().toArray())
    }
}
