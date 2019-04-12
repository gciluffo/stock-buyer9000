import { environment } from '../../environments/environment';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class StockService {
  headers = new HttpHeaders({
    'cache-control': 'cache'
  });

  constructor(private http: HttpClient) { }

  getPriceByTicker(ticker: string): Observable<any> {
    return this.http.get<any>(`${environment.stockApiEndpoint}/stocks/${ticker}/price`, { headers: this.headers });
  }

  createPurchase(ticker: string, amount: string): Observable<any> {
    const payload = {
        ticker: ticker,
        amount: amount
    };
    return this.http.post<any>(`${environment.stockApiEndpoint}/stocks/purchases`, payload, { headers: this.headers });
  }
}
