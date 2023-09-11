import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Data Binding
https://www.youtube.com/watch?v=af_Lw_gEHRw&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=27&pp=iAQB - Template Reference Variable */