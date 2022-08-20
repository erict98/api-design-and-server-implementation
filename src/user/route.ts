import express, {Request,Response} from 'express'
import { Collection } from '../data'
import * as controller from './controller'

var userRouter = function(data: Collection) {
    var router = express.Router()

    // GET
    router.get('/', controller.getUsers(data))

    // PUT
    router.put('/:id/:business', controller.postUsersBusinesses(data))

    return router
}

// GET

// userRouter.get('/:id/businesses', controller.getUsersBusinesses)
/*
userRouter.get('/:id/review', controller.getUsersReview)


// PATCH
userRouter.patch('/:id/:business', controller.patchUsersBusinesses)

// DELETE
userRouter.delete('/:id/:business', controller.deleteUsersBusiness)*/

export default userRouter