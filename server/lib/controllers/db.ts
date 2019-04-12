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

    public async getItemById(id: string) {
        const item = await storage.getItem(id);
        return Object.assign({}, item, {id: id});
    }

    public async removeItemById(id: string) {
        return await storage.removeItem(id);
    }

    public async setItem(obj: any) {
        const id = uuidv1();
        obj.createdDate = new Date().toISOString();
        await storage.setItem(id, obj);
        return Object.assign({}, obj, {id: id});
    }
}

