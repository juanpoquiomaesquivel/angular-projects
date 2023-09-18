import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Lifecycle Hook
https://www.youtube.com/watch?v=jFk9-zV27BE&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=31&pp=iAQB - Angular Lifecycle Hooks
https://www.youtube.com/watch?v=0Ywak7Ppszw&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=32&pp=iAQB - Angular Lifecycle Hook in Action */