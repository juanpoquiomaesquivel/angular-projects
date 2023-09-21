import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Directives
https://www.youtube.com/watch?v=blErqI-o1TM&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=36&pp=iAQB - @HostListner in Angular */