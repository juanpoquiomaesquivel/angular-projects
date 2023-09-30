import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoggerService } from './Services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Services & Dependency Injection
https://www.youtube.com/watch?v=fpDgrktYb5M&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=49&pp=iAQB - Creating a Data Service
https://www.youtube.com/watch?v=v6hLg-YnMj4&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=50&pp=iAQB - Injecting Service into another Service */