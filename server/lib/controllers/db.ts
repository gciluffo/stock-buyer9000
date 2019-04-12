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
        return storage.getItem(id);
    }

    public async setItem(obj: object) {
        const id = uuidv1();
        await storage.setItem(id, obj);
        return id;
    }
}

