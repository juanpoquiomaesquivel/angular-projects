import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Angular Http
https://www.youtube.com/watch?v=M3vN0hrKgGQ&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=97&pp=iAQB - Introduction to HTTP requests in Angular
https://www.youtube.com/watch?v=NFTNBgpxzw4&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=98&pp=iAQB - Setting up Firebase
https://www.youtube.com/watch?v=oTObLWih_EA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=99&pp=iAQB - Sending a Post Request
https://www.youtube.com/watch?v=Nuh6hTDh31s&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=100&pp=iAQB - Fetching Data with Get requets
https://www.youtube.com/watch?v=w8mw7xlhi9Y&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=101&pp=iAQB - Deleting Data with HTTP Delete Request
https://www.youtube.com/watch?v=9ZFXXMFSs8A&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=102&pp=iAQB - Using Service for HTTP Request 
https://www.youtube.com/watch?v=ASFZsGJ5ZuE&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=103&pp=iAQB - Update data with HTTP Put Request
https://www.youtube.com/watch?v=tk4msPsp3kM&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=104&pp=iAQB - Handling HTTP Response Errors
https://www.youtube.com/watch?v=mFxZ_ne3g3c&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=105&pp=iAQB - Setting Headers & Query Params in HTTP Requests */