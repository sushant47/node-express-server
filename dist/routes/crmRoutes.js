"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
const contact_list_1 = require("../contact-list");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.contactsList = new contact_list_1.ContactsList();
    }
    routes(app) {
        app.route('/users')
            .get(this.contactController.getUsers);
        app.route('/userPages')
            .get(this.contactController.getUserPages);
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        app.route('/contact')
            // GET endpoint 
            .get((req, res) => {
            const list = this.contactsList.getContactsList();
            // Get all contacts            
            res.status(200).send({
                list
                // message: 'GET request successfulll!!!!'
            });
        })
            // POST endpoint
            .post((req, res) => {
            // Create new contact         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            });
        });
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get((req, res) => {
            // Get a single contact detail            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        })
            .put((req, res) => {
            // Update a contact           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            });
        })
            .delete((req, res) => {
            // Delete a contact     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map