"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBusinesses = exports.patchBusinesses = exports.postBusinessesReview = exports.postBusinesses = exports.getBusinessesBusinessName = exports.getBusinesses = void 0;
/*
GET all businesses
*/
function getBusinesses(data) {
    return function (req, res) {
        res.status(200).send(data.businesses);
    };
}
exports.getBusinesses = getBusinesses;
/* GET business information
*/
function getBusinessesBusinessName(data) {
    return function (req, res) {
        let params = req.params;
        if (!checkBusinessExists(data, params.businessName)) {
            res.status(400).send('Business does not exist!');
            return;
        }
        res.status(200).send(data.businesses[params.businessName]);
    };
}
exports.getBusinessesBusinessName = getBusinessesBusinessName;
/*
POST request to submit a new business under a user
body {
    businessName | new business name
    id           | business owner
}
*/
function postBusinesses(data) {
    return function (req, res) {
        let body = req.body;
        if (body.businessName == '' || body.id == '') {
            res.status(400).send('Missing fields!');
            return;
        }
        if (data.users[body.id] === undefined) {
            res.status(400).send('Invalid owner!');
            return;
        }
        if (data.businesses[body.businessName] !== undefined) {
            res.status(400).send('Invalid business name!');
            return;
        }
        if (body.businessName in data.businesses) {
            res.status(400).send('Business name already taken!');
            return;
        }
        let business = `
        {"${body.businessName}" : {
            "businessName" : "${body.businessName}",
            "id" : "${body.id}"
        }}`;
        data.businesses[body.businessName] = JSON.parse(business);
        data.users[body.id].businesses.push(body.businessName);
        // circumvents the inability to add additional properties of the Collection interface
        let payload = JSON.parse(JSON.stringify(data.businesses[body.businessName]));
        payload.links = {
            "GET owner": `/users/${body.id}`,
            "GET business": `/businesses/${body.businessName}`
        };
        res.status(200).send(payload);
    };
}
exports.postBusinesses = postBusinesses;
/*
POST request to update a business' review
params {
    businessName | current business name
}
body {
    id | author of review
    rating | score between 1 - 5
    review | written review
}
*/
function postBusinessesReview(data) {
    return function (req, res) {
        let params = req.params;
        let body = req.body;
        if (!checkBusinessExists(data, params.businessName)) {
            res.status(400).send('Business does not exist!');
            return;
        }
        if (!checkUserExists(data, body.id)) {
            res.status(400).send('User does not exist!');
            return;
        }
        if (Number(body.rating) < 1 || Number(body.rating) > 5) {
            res.status(400).send('Ratings must be between 1 and 5!');
        }
        let reviews = data.businesses[params.businessName].reviews;
        if (reviews[body.id] === undefined) {
            reviews[body.id] = {
                rating: body.rating,
                review: body.review
            };
            data.users[body.id].reviews.push(params.businessName);
            res.status(200).send(data.businesses[params.businessName]);
        }
        else {
            res.status(400).send(`Review from ${body.id} already exists!`);
        }
    };
}
exports.postBusinessesReview = postBusinessesReview;
/*
PATCH request to update a user's business' name
params {
    businessName | current business name
}
body {
    businessName | new business name
}
*/
function patchBusinesses(data) {
    return function (req, res) {
        let params = req.params;
        let body = req.body;
        if (body.businessName == '') {
            res.status(400).send('Missing field!');
            return;
        }
        if (!checkBusinessExists(data, params.businessName)) {
            res.status(400).send('Business does not exist!');
            return;
        }
        let business = data.businesses[params.businessName];
        business.businessName = body.businessName;
        // update the user's businesses
        let businessesList = data.users[business.id].businesses;
        for (let i = 0; i < businessesList.length; i++) {
            if (businessesList[i] == params.businessName) {
                businessesList[i] = params.businessName;
            }
        }
        let payload = JSON.parse(JSON.stringify(business));
        payload.links = {
            "GET owner": `/users/${business.id}`
        };
        res.status(200).send(payload);
    };
}
exports.patchBusinesses = patchBusinesses;
/*
DELETE Request
params {
    businessName | business to be deleted
}
*/
function deleteBusinesses(data) {
    return function (req, res) {
        let params = req.params;
        if (!checkBusinessExists(data, params.businessName)) {
            res.status(400).send('Business does not exist!');
            return;
        }
        let id = data.businesses[params.businessName].id;
        let businessList = data.users[id].businesses;
        let index = businessList.indexOf(params.businessName);
        businessList.splice(index, 1);
        delete data.businesses[params.businessName];
        let payload = JSON.parse(JSON.stringify(data.users[id]));
        res.status(200).send(payload);
    };
}
exports.deleteBusinesses = deleteBusinesses;
// Helper function to validate if the business name is correct
function checkBusinessExists(data, name) {
    for (let value of Object.keys(data.businesses)) {
        if (value == name) {
            return true;
        }
    }
    return false;
}
// Helper function to validate if the user name is correct
function checkUserExists(data, name) {
    for (let value of Object.keys(data.users)) {
        if (value == name) {
            return true;
        }
    }
    return false;
}
