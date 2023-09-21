import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Directives
https://www.youtube.com/watch?v=DxfAEhdOl_0&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=34&pp=iAQB - Custom Attribute Directive */