"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchUsers = exports.postUsers = exports.getUsersReviews = exports.getUsersBusinesses = exports.getUsersID = exports.getUsers = void 0;
/*
GET request all users
 */
function getUsers(data) {
    return function (req, res) {
        res.status(200).send(data.users);
    };
}
exports.getUsers = getUsers;
/*
GET request for user ID
 */
function getUsersID(data) {
    return function (req, res) {
        if (data.users[req.params.id] == undefined) {
            res.status(400).send(`${req.params.id} does not exist!`);
            return;
        }
        res.status(200).send(data.users[req.params.id]);
    };
}
exports.getUsersID = getUsersID;
/*
GET request for user's businesses
*/
function getUsersBusinesses(data) {
    return function (req, res) {
        if (data.users[req.params.id] == undefined) {
            res.status(400).send(`${req.params.id} does not exist!`);
            return;
        }
        res.status(200).send(data.users[req.params.id].businesses);
    };
}
exports.getUsersBusinesses = getUsersBusinesses;
/*
GET request for user's reviews
*/
function getUsersReviews(data) {
    return function (req, res) {
        if (data.users[req.params.id] == undefined) {
            res.status(400).send(`${req.params.id} does not exist!`);
            return;
        }
        res.status(200).send(data.users[req.params.id].reviews);
    };
}
exports.getUsersReviews = getUsersReviews;
/*
POST request to create a new user
*/
function postUsers(data) {
    return function (req, res) {
        let params = req.params;
        if (data.users[params.id] === undefined) {
            data.users[params.id] = {
                id: params.id,
                businesses: [],
                reviews: []
            };
        }
        else {
            res.status(400).send(`${params.id} already exists!`);
            return;
        }
        res.status(200).send(data.users[params.id]);
    };
}
exports.postUsers = postUsers;
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
function patchUsers(data) {
    return function (req, res) {
        let params = req.params;
        let body = req.body;
        if (data.users[params.id] == undefined) {
            res.status(400).send(`${params.id} does not exist!`);
            return;
        }
        let reviews = data.users[params.id].reviews;
        let found = false;
        for (let i = 0; i < reviews.length; i++) {
            reviews[i] == body.businessName;
            found = true;
        }
        if (!found) {
            res.status(400).send(`User did not create review for ${body.businessName}`);
            return;
        }
        let businessReview = data.businesses[body.businessName].reviews[params.id];
        console.log(businessReview);
        businessReview.rating = body.rating;
        businessReview.review = body.review;
        res.status(200).send(data.businesses[body.businessName].reviews);
    };
}
exports.patchUsers = patchUsers;
