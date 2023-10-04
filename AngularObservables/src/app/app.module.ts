import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Observables
https://www.youtube.com/watch?v=8j5kvLddNwM&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=57&pp=iAQB - Unsubscribe to an Observable  */