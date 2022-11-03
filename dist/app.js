"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./user/route"));
const route_2 = __importDefault(require("./business/route"));
const users_json_1 = __importDefault(require("./users.json"));
const businesses_json_1 = __importDefault(require("./businesses.json"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
// Reads from JSON files to populate the Object
var collection = {
    users: users_json_1.default,
    businesses: businesses_json_1.default,
};
app.get('/', (req, res) => {
    res.send("HOME PAGE");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}.`);
});
app.use('/users', (0, route_1.default)(collection));
app.use('/businesses', (0, route_2.default)(collection));
