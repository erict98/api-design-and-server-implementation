import * as express from 'express'
import { Collection } from '../data'
import * as controller from './controller'

var businessRouter = function(data: Collection) {
    var router = express.Router()

    // GET
    router.get('/', controller.getBusinesses(data))

    router.get('/:businessName', controller.getBusinessesBusinessName(data))

    // POST
    router.post('/', controller.postBusinesses(data))

    router.post('/:businessName', controller.postBusinessesReview(data))

    // PATCH
    router.patch('/:businessName', controller.patchBusinesses(data))

    // DELETE
    router.delete('/:businessName', controller.deleteBusinesses(data))

    return router
}

export default businessRouter