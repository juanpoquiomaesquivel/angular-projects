import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Angular Forms
https://www.youtube.com/watch?v=8PItOt2wiz0&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=83&pp=iAQB - Template Driven Form in Angular
https://www.youtube.com/watch?v=Vk0T2zmsq4M&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=84&pp=iAQB - Template Driven Form Validation in Angular
https://www.youtube.com/watch?v=bMVP5aT8NyM&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=85&pp=iAQB - Form Control Group in Template Driven Form
https://www.youtube.com/watch?v=c2-EVAonOOw&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=86&pp=iAQB - Working with Radio button in Template Driven Form
https://www.youtube.com/watch?v=drSBWTWUPBw&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=87&pp=iAQB - setValue() & patchValue() in Template Driven Form
https://www.youtube.com/watch?v=Wr2PYMs1P1g&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=88&pp=iAQB - Retrieving Form Data and Reseting Form */