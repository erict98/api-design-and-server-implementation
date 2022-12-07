"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
/*
Simple HTTP request to database that returns all the data
*/
function getData(collection) {
    return async function (req, res) {
        res.send(await collection.find().toArray());
    };
}
exports.getData = getData;
