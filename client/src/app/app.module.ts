import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StockService } from './services/stock.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PurchaseStockComponent } from './components/purchase-stock/purchase-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseStockComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
