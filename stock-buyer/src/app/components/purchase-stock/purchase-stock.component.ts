import { StockService } from './../../services/stock.service';
import { Component, OnInit, Input } from '@angular/core';
import { Stock } from "src/app/models/stock.model";

@Component({
  selector: 'purchase-stock',
  templateUrl: './purchase-stock.component.html',
  styleUrls: ['./purchase-stock.component.scss']
})
export class PurchaseStockComponent implements OnInit {

  model: any = {};
  status: string;
  error: string;

  constructor(private stockSvc: StockService) {}

  ngOnInit() {
    this.model.ticker = '';
  }

  getStockPrice() {
    if (this.model.ticker) {
      this.stockSvc.getPriceByTicker(this.model.ticker)
        .subscribe((res: string) => {
          this.model.price = res;
        }, (error) => {
          console.error(error);
          this.error = `Error getting stock price ${error.name}`;
        });
    }
  }

  createPurchase() {
    if (this.model.ticker) {
      this.stockSvc.createPurchase(this.model.ticker, this.model.price)
        .subscribe((stock: Stock) => {
          this.status = `Successfully purchased stock with id of ${stock.id}`
        }, (error) => {
          console.error(error);
          this.error = `Error creating stock purchase ${error.message}`;
        });
    }
  }

}
