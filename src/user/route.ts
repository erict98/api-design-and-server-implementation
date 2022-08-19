import express, {Request,Response} from 'express'

var userRouter = express.Router()

// GET
userRouter.get('/', (req:Request, res:Response) => {
    res.send('about users')
})


// userRouter.get('/:id/businesses', controller.getUsersBusinesses)
/*
userRouter.get('/:id/review', controller.getUsersReview)

// POST
userRouter.post('/:id/:business', controller.posUserstBusiness)

// PATCH
userRouter.patch('/:id/:business', controller.patchUsersBusiness)

// DELETE
userRouter.delete('/:id/:business', controller.deleteUsersBusiness)*/

export default userRouter


So in your case calling code will look like:

var animal_router = require('./animal_router')

app.use('/birds', animal_router({
    name: 'Bird',
    says: 'chirp'
}));

app.use('/cats', animal_router({
    name: 'Cat',
    says: 'meow'
}));
While ./animal_router.js might look following:

var express = require('express');

// Create wrapper function that will adjust router based on provided configuration
var wrapper = function (animal_config) {
    var router = express.Router();
    
    router.get('/about', function(req, res) {
        var animal = animal_config;
        res.send(animal.name + ' says ' + animal.says);
    });

    return router;
}

module.exports = wrapper;