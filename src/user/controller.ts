import express, {Request, Response} from 'express';
import {Collection} from '../data';


/*
GET request all users
 */
export function getUsers(data: Collection) {
    return function(req:Request, res:Response) {
        res.status(200).send(data.users)
    }
} 

/*
GET request for user ID
 */
export function getUsersID(data: Collection) {
    return function(req:Request, res:Response) {
        if (data.users[req.params.id] == undefined) {
            res.status(400).send(`${req.params.id} does not exist!`)
            return
        }
        res.status(200).send(data.users[req.params.id])
    }
} 


/*
GET request for user's businesses
*/
export function getUsersBusinesses(data: Collection) {
    return function(req:Request, res:Response) {
        if (data.users[req.params.id] == undefined) {
            res.status(400).send(`${req.params.id} does not exist!`)
            return
        }
        res.status(200).send(data.users[req.params.id].businesses)
    }
} 

/*
GET request for user's reviews
*/
export function getUsersReviews(data: Collection) {
    return function(req:Request, res:Response) {
        if (data.users[req.params.id] == undefined) {
            res.status(400).send(`${req.params.id} does not exist!`)
            return
        }
        res.status(200).send(data.users[req.params.id].reviews)
    }
} 

/*
POST request to create a new user
*/
export function postUsers(data: Collection) {
    return function(req:Request, res:Response) {
        let params = req.params

        if (data.users[params.id] === undefined) {
            data.users[params.id] = {
                id : params.id,
                businesses : [],
                reviews : []
            }
        } else {
            res.status(400).send(`${params.id} already exists!`)
            return
        }

        res.status(200).send(data.users[params.id])
    }
}

/* 
PATCH request to update the user's review for a business
PARAM {
    id | user name
}
BODY {
    businessName | name of reviewed business
    rating | new rating
    review | new review
}
*/
export function patchUsers(data: Collection) {
    return function(req:Request, res:Response) {
        let params = req.params
        let body = req.body
        if (data.users[params.id] == undefined) {
            res.status(400).send(`${params.id} does not exist!`)
            return
        }
        
        let reviews = data.users[params.id].reviews
        let found = false
        for (let i = 0; i < reviews.length; i++) {
            reviews[i] == body.businessName
            found  = true
        }
        if (!found) {
            res.status(400).send(`User did not create review for ${body.businessName}`)
            return
        }

        let businessReview = data.businesses[body.businessName].reviews[params.id]
        console.log(businessReview)
        businessReview.rating = body.rating
        businessReview.review = body.review

        res.status(200).send(data.businesses[body.businessName].reviews)
    }
}