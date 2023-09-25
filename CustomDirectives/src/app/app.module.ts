import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';
import { StyleDirective } from './CustomDirective/style.directive';
import { IfDirective } from './CustomDirective/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    StyleDirective,
    IfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Directives
https://www.youtube.com/watch?v=xP86a-ZtIuE&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=42&pp=iAQB - How Structural Directive Works
https://www.youtube.com/watch?v=4ldr69qHY8M&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=43&pp=iAQB - Custom Structural Directive */