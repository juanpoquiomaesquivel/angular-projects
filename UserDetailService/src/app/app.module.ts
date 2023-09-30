import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Services & Dependency Injection
https://www.youtube.com/watch?v=dcoiUJrdsP0&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=51&pp=iAQB - Component Interaction with Services */