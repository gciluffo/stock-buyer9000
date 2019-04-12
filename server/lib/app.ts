import * as express from "express";
import * as bodyParser from "body-parser";
import { StockRoutes } from "./routes/stocks";
import { Database } from './controllers/db';

class App {

    public app: express.Application = express();
    public stockRoutes: StockRoutes = new StockRoutes();

    constructor() {
        this.config();
        this.app.locals.database = new Database();
        this.stockRoutes.routes(this.app);  
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
