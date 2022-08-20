import express, {Request, Response} from 'express';
import { Collection } from '../data';


export function getBusinesses(data: {}) {
    return function(req:Request, res:Response) {
        res.send('About Businesses')
    }
} 
