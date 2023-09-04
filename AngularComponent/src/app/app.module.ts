import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component'; 
import { SearchComponent } from './search/search.component'; // here it's declared
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent // also here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Directives
https://www.youtube.com/watch?v=Xc58hRwsvR8&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=18&pp=iAQB - What is Directives
https://www.youtube.com/watch?v=U-rEXMveeaA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=19&pp=iAQB - ngFor Directive in Angular */