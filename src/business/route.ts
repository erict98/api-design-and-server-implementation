import * as express from 'express'
import * as controller from './controller'

var businessRouter = express.Router()

// GET
businessRouter.get('/', controller.getBusinesses)
/*
businessRouter.get('/:id', controller.getBusinessesID)

// POST
businessRouter.post('/:id/review', controller.postBusinessIdReview)

// PATCH
businessRouter.patch('/:id/review', controller.patchBusinessesIdReview)

// DELETE
businessRouter.delete('/:id/review', controller.deleteBusinessIdReview)*/

export default businessRouter