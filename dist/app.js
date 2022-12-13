"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./db");
// Creates the Express application
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
// Default home page
app.get('/', (req, res) => {
    res.send(`Please make API requests to http://localhost:${PORT}`);
});
// Creates the database connection
var client = db_1.mongoclient;
async function main() {
    try {
        await client.connect();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
        const db = client.db('dex');
        const collection = db.collection('SV');
        // Binds the middlewares to instance of app
        const dataRouter = require('./routes/dataRouter');
        app.use('/data', dataRouter(collection));
    }
    catch (err) {
        console.error(err);
    }
}
main();
// Error-handliung
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
