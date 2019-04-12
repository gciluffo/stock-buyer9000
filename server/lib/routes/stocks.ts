import { Request, Response, NextFunction } from "express";
import { getStockPriceByTicker } from "../controllers/iex-trading-api";

export class StockRoutes {
        
    public routes(app): void {
        
        app.route('/status')
        .get((req: Request, res: Response, next: NextFunction) => {
            res.status(200).send({
                message: `Running ${new Date()}`
            })
        });

        app.route('/stocks/:ticker/price')
        .get(async (req: Request, res: Response, next: NextFunction) => {
            try {
                const response = await getStockPriceByTicker(req.params.ticker);
                return res.status(response.statusCode).send({price: response.body});
            } catch (e) {
                return next(e);
            }
        });

        app.route('/stocks/purchases/:id')
        .get(async (req: Request, res: Response, next: NextFunction) => {
            try {
                const response = await req.app.locals.database.getItemById(req.params.id);
                if (response) {
                    return res.status(200).send(response);
                } else {
                    return res.status(404).send([]);
                }
                
            } catch (e) {
                return next(e);
            }
        });

        app.route('/stocks/purchases/ticker/:id')
        .get(async (req: Request, res: Response, next: NextFunction) => {
            try {
                const response = await req.app.locals.database.getAllPurchasesByTicker(req.params.id);
                return res.status(200).send(response);
            } catch (e) {
                return next(e);
            }
        });

        app.route('/stocks/purchases')
        .get(async (req: Request, res: Response, next: NextFunction) => {
            try {
                const response = await req.app.locals.database.getAllItems(req.params.id);
                return res.status(200).send(response);
            } catch (e) {
                return next(e);
            }
        });

        app.route('/stocks/purchases')
        .post(async (req: Request, res: Response, next: NextFunction) => {
            try {
                // Crude obj validation, where a lib like Joi would be used.
                if (!req.body.ticker || !req.body.amount) {
                    return res.status(400).send({
                        message: `ticker and amount required`
                    });
                }
                const purchase = await req.app.locals.database.setItem(req.body);
                return res.status(201).send(purchase);
            } catch (e) {
                return next(e);  
            }
        });
    }
}