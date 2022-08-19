import * as express from 'express'
import * as controller from './controller'

var userRouter = express.Router()

// GET
userRouter.get('/', controller.getUsers)

/*
userRouter.get('/:id/businesses', controller.getUsersBusinesses)

userRouter.get('/:id/review', controller.getUsersReview)

// POST
userRouter.post('/:id/:business', controller.posUserstBusiness)

// PATCH
userRouter.patch('/:id/:business', controller.patchUsersBusiness)

// DELETE
userRouter.delete('/:id/:business', controller.deleteUsersBusiness)*/

export default userRouter