import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Directives 
https://www.youtube.com/watch?v=1Gkiq1u2aQc&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=30&pp=iAQB - ng-content in Angular */