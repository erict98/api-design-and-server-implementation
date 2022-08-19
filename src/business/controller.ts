import express, {Request, Response} from 'express';

export const getBusinesses = (req:Request, res:Response) => {
    res.send('About businesses')
}