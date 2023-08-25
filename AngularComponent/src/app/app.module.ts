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
// npm install --save bootstrap
// "node_modules/bootstrap/dist/css/bootstrap.min.css" (in angular.json file, styles)
/* Components 
https://www.youtube.com/watch?v=dP9RzPBcnqA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=7&pp=iAQB - What is a Component
https://www.youtube.com/watch?v=UwTMjTt8jME&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=8&pp=iAQB - Creating a Custom Component
https://www.youtube.com/watch?v=7iNAj4aU3ow&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=9&pp=iAQB - Template property of Component
https://www.youtube.com/watch?v=l-H-sDb7ChY&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=10&pp=iAQB - styles property of Component
https://www.youtube.com/watch?v=bq9mvcuAmcQ&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=11&pp=iAQB - Using Bootstrap in Angular
https://www.youtube.com/watch?v=ZQmTyNHXJNE&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=12&pp=iAQB - Different Selectors in Angular */