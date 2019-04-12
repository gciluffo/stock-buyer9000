import { Request, Response, NextFunction } from "express";

export class StockRoutes { 
        
    public routes(app): void {
        
        app.route('/status')
        .get((req: Request, res: Response) => {         
            res.status(200).send({
                status: `Running ${new Date()}`
            })
        });
    }
}