import express, {Request, Response} from 'express';

export const getUsers = (req:Request, res:Response) => {
    res.send(res.locals.data + 'About users')
}

export const getUsersBusinesses = (req:Request, res:Response) => {

}