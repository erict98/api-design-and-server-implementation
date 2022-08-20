import express, {Request, Response} from 'express';
import {Collection} from '../data';


export function getUsers(data: Collection) {
    return function(req:Request, res:Response) {
        res.send('About users')
    }
} 


export function postUsersBusinesses(data: Collection) {
    return function(req:Request, res:Response) {
        res.status(400)
        res.contentType('application/json')
    }
}