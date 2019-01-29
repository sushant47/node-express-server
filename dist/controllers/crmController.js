"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const userSchema = {
    "first_name": String,
    "last_name": String,
    "email": String,
    "gender": String,
    "ip_address": String,
};
const Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
exports.Users = mongoose.model('users', userSchema);
class ContactController {
    getContacts(req, res) {
        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getUsers(req, res) {
        exports.Users.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getUserPages(req, res) {
        var pageNo = parseInt(req.query.pageNo);
        var size = parseInt(req.query.size);
        let query = {};
        if (pageNo < 0 || pageNo === 0) {
            res.send({ "error": true, "message": "invalid page number, should start with 1" });
            return res;
        }
        query['skip'] = size * (pageNo - 1);
        query['limit'] = size;
        // Find some documents
        exports.Users.count({}, function (err, totalCount) {
            if (err) {
                res.send({ "error": true, "message": "Error fetching data" });
            }
            exports.Users.find({}, {}, query, function (err, data) {
                // Mongo command to fetch all data from collection.
                if (err) {
                    res.send({ "error": true, "message": "Error fetching data" });
                }
                else {
                    var totalPages = Math.ceil(totalCount / size);
                    res.send({ "error": false, "message": data, "pages": totalPages });
                }
                res;
            });
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map