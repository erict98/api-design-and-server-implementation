import * as express from 'express'
import { Collection } from '../data'
import * as controller from './controller'

var businessRouter = function(data: {}) {
    var router = express.Router()

    // GET
    router.get('/', controller.getBusinesses(data))

    return router
}

// GET
//businessRouter.get('/', controller.getBusinesses)
/*
businessRouter.get('/:id', controller.getBusinessesID)

// POST
businessRouter.post('/:id/review', controller.postBusinessIdReview)

// PATCH
businessRouter.patch('/:id/review', controller.patchBusinessesIdReview)

// DELETE
businessRouter.delete('/:id/review', controller.deleteBusinessIdReview)*/

export default businessRouter