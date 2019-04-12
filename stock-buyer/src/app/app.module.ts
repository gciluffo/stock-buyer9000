import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PurchaseStockComponent } from './purchase-stock/purchase-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseStockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
