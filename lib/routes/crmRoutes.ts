import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";
import { ContactsList } from "../contact-list";


export class Routes {
    public contactController: ContactController = new ContactController();
    public contactsList: ContactsList = new ContactsList();
    public routes(app): void {
        app.route('/users')
        .get(this.contactController.getUsers)
        //     .get((req, res) => {
        //         var pageNo = parseInt(req.query.pageNo)
        //         var size = parseInt(req.query.size)
        //         let query = {}
        //         if (pageNo < 0 || pageNo === 0) {
        //             res = { "error": true, "message": "invalid page number, should start with 1" };
        //             return res
        //         }
        //         query['skip'] = size * (pageNo - 1)
        //         query['limit'] = size
        //         // Find some documents
        //         Users.count({}, function (err, totalCount) {
        //             if (err) {
        //                 res = { "error": true, "message": "Error fetching data" }
        //             }
        //             Users.find({}, {}, query, function (err, data) {
        //                 // Mongo command to fetch all data from collection.
        //                 if (err) {
        //                     res = { "error": true, "message": "Error fetching data" };
        //                 } else {
        //                     var totalPages = Math.ceil(totalCount / size)
        //                     res = { "error": false, "message": data, "pages": totalPages };
        //                 }
        //                 res;
        //             });
        //         })
        //     })
app.route('/userPages')
.get(this.contactController.getUserPages)
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        // Contact 
        app.route('/contact')
            // GET endpoint 
            .get((req: Request, res: Response) => {
                const list = this.contactsList.getContactsList();
                // Get all contacts            
                res.status(200).send({
                    list
                    // message: 'GET request successfulll!!!!'
                })
            })
            // POST endpoint
            .post((req: Request, res: Response) => {
                // Create new contact         
                res.status(200).send({
                    message: 'POST request successfulll!!!!'
                })
            })

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get((req: Request, res: Response) => {
                // Get a single contact detail            
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
            .put((req: Request, res: Response) => {
                // Update a contact           
                res.status(200).send({
                    message: 'PUT request successfulll!!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                // Delete a contact     
                res.status(200).send({
                    message: 'DELETE request successfulll!!!!'
                })
            })
    }
}