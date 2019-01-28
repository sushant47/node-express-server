"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes");
const mongoose = require("mongoose");
// const userSchema = {
//     "first_name": String,
//     "last_name": String,
//     "email": String,
//     "gender": String,
//     "ip_address": String,
// };
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost:27017/demo';
        this.routePrv = new crmRoutes_1.Routes();
        this.mongoSetup();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
// export const Users = mongoose.model('users', userSchema);
exports.default = new App().app;
//# sourceMappingURL=app.js.map