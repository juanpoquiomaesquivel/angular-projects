import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
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
https://www.youtube.com/watch?v=Pd4nz-9jq_4&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=40&pp=iAQB - Conditional Directive in Angular */