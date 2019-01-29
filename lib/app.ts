import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import * as cors from "cors";
// const userSchema = {
//     "first_name": String,
//     "last_name": String,
//     "email": String,
//     "gender": String,
//     "ip_address": String,
// };
class App {
    public local = 'mongodb://localhost:27017/demo';
    public mongoUrl: string = process.env.NODE_ENV === 'production ' ? process.env.MONGOLAB_URI : this.local;
    public app: express.Application;
    public routePrv: Routes = new Routes();
    constructor() {
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
        this.app.use(cors());
        this.routePrv.routes(this.app);
        // this.app.use(function(req, res, next) {
        //     res.header('Access-Control-Allow-Credentials', true);
        //     res.header('Access-Control-Allow-Origin', '*');
        //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        //     res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        //     next();
        // });
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.MONGODB_URI);
    }
}
// export const Users = mongoose.model('users', userSchema);
export default new App().app;