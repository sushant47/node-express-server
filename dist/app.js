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
        this.local = 'mongodb://localhost:27017/demo';
        this.mongoUrl = process.env.NODE_ENV === 'production ' ? process.env.MONGOLAB_URI : this.local;
        this.routePrv = new crmRoutes_1.Routes();
        console.log('environment ', process.env.NODE_ENV);
        console.log('process ', process.env);
        console.log('mongoLab ', process.env.MONGOLAB_URI);
        console.log('mongo DB ', process.env.MONGODB_URI);
        console.log(this.mongoUrl);
        if (process.env.NODE_ENV == 'production') {
            console.log('hi');
        }
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
        mongoose.connect('mongodb://sushant:Susano@47@ds147734.mlab.com:47734/users');
    }
}
// export const Users = mongoose.model('users', userSchema);
exports.default = new App().app;
//# sourceMappingURL=app.js.map