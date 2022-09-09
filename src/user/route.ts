import express, {Request,Response} from 'express'
import { Collection } from '../data'
import * as controller from './controller'

var userRouter = function(data: Collection) {
    var router = express.Router()

    // GET
    router.get('/', controller.getUsers(data))

    router.get('/:id', controller.getUsersID(data))

    router.get('/:id', controller.getUsersBusinesses(data))

    router.get('/:id', controller.getUsersReviews(data))

    // POST
    router.post('/:id', controller.postUsers(data))
    
    // PATCH
    router.patch('/:id', controller.patchUsers(data))

    return router
}


export default userRouter