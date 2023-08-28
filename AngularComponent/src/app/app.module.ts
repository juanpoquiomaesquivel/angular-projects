import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component'; 
import { SearchComponent } from './search/search.component'; // here it's declared

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent // also here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Data Binding
https://www.youtube.com/watch?v=qIgRaYGso34&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=16&pp=iAQB - What is Event Binding */