import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";
import { ContactsList } from "../contact-list";


export class Routes {
    public contactController: ContactController = new ContactController();
    public contactsList: ContactsList = new ContactsList();
    public routes(app): void {
        app.route('/users')
            .get(this.contactController.getUsers)
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