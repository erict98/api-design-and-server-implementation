import express from 'express'
const dataController = require('../controllers/dataController')

module.exports = function router(collection: any) {
    const routes = express.Router()
    routes.get('/', dataController.getData(collection))
    return routes
}

