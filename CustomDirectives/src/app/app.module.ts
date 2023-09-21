import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Directives
https://www.youtube.com/watch?v=7LOu-xF9ML0&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=35&pp=iAQB - Renderer2 in Angular */