import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const userSchema = {
    "first_name": String,
    "last_name": String,
    "email": String,
    "gender": String,
    "ip_address": String,
};
const Contact = mongoose.model('Contact', ContactSchema);
export const Users = mongoose.model('users', userSchema);
export class ContactController {
    public getContacts(req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    public getUsers(req: Request, res: Response) {
        Users.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getUserPages(req: Request, res: Response) {
        var pageNo = parseInt(req.query.pageNo)
        var size = parseInt(req.query.size)
        let query = {}
        if (pageNo < 0 || pageNo === 0) {
            res.send({ "error": true, "message": "invalid page number, should start with 1" });
            return res
        }
        query['skip'] = size * (pageNo - 1)
        query['limit'] = size
        // Find some documents
        Users.count({}, function (err, totalCount) {
            if (err) {
                res.send({ "error": true, "message": "Error fetching data" });
            }
            Users.find({}, {}, query, function (err, data) {
                // Mongo command to fetch all data from collection.
                if (err) {
                    res.send({ "error": true, "message": "Error fetching data" });
                } else {
                    var totalPages = Math.ceil(totalCount / size)
                    res.send({ "error": false, "message": data, "pages": totalPages });
                }
                res;
            });
        })
    }
}
