import * as express from "express";
import * as process from "process";
import {IndexRouter} from "./routers";

class Server {
    app: express.Application;

    constructor() {
        this.app = express();
    }

    attachRoutes() {
        var router: express.Router = express.Router();
        new IndexRouter().attach(router);
        this.app.use(router);
    }

    public start() {
        this.attachRoutes();
        var portNumber = process.env.PORT || 8080;
        console.log("Starting the server on " + portNumber);
        this.app.listen(portNumber);
    }
}

new Server().start();