import { Stock } from './../models/stock.model';
import { Request, Response } from 'express';
const storage = require('node-persist');
const uuidv1 = require('uuid/v1');

export class Database {

    constructor() {
        storage.init({
            stringify: JSON.stringify,
            parse: JSON.parse,
            encoding: 'utf8',
            logging: false,
            forgiveParseErrors: false
        });
    }

    public async getItemById(id: string): Promise<any> {
        const item = await storage.getItem(id);
        if (item) {
            return Object.assign({}, item, {id: id});
        } else {
            return null;
        }
        
    }

    public async removeItemById(id: string): Promise<any> {
        return await storage.removeItem(id);
    }

    public async setItem(obj: any): Promise<any> {
        const id = uuidv1();
        obj.createdDate = new Date().toISOString();
        await storage.setItem(id, obj);
        return Object.assign({}, obj, {id: id});
    }

    public async getAllItems(): Promise<Stock[]> {
        const res: Stock[] = [];
        await storage.forEach(async (datum) => {
            res.push(Object.assign({}, datum.value, {id: datum.key}));
        });
        return res;
    }

    public async getAllPurchasesByTicker(ticker: string): Promise<Stock[]> {
        const matches: Stock[] = [];
        await storage.forEach(async (datum) => {
            if (datum.value.ticker.toLowerCase() === ticker.toLowerCase()) {
                matches.push(Object.assign({}, datum.value, {id: datum.key}));
            }
        });
        return matches;
    }
}
