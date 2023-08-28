import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component'; // here it's declared

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent // also here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Data Binding
https://www.youtube.com/watch?v=r8U2DVRArdY&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=13&pp=iAQB - What is data binding
https://www.youtube.com/watch?v=mT5q6zFzs3k&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=14&pp=iAQB - What is String Interpolation
https://www.youtube.com/watch?v=k0sbLR5X2oY&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=15&pp=iAQB - What is Property Binding */