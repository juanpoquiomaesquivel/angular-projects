import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* View Encapsulation 
https://www.youtube.com/watch?v=X-1TBjBx6pc&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=29&pp=iAQB - What is View Encapsulation in Angular */