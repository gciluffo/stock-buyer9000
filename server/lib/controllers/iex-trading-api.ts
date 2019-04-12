const request = require('request');
const BASE_URL = 'https://api.iextrading.com/1.0';

export async function getStockPriceByTicker(ticker: string): Promise<any> {
    const endpoint = `${BASE_URL}/stock/${ticker}/price`;
    return await makeRequest(endpoint);
}

async function makeRequest(endpoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
        request(endpoint, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        }); 
    });
}