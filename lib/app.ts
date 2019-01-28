import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

// const userSchema = {
//     "first_name": String,
//     "last_name": String,
//     "email": String,
//     "gender": String,
//     "ip_address": String,
// };
class App {
    public mongoUrl: string = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/demo';
    public app: express.Application;
    public routePrv: Routes = new Routes();
    constructor() {
        console.log(this.mongoUrl);
        this.mongoSetup();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
// export const Users = mongoose.model('users', userSchema);
export default new App().app;