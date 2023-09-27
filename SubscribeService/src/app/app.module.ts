import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Services & Dependency Injection
https://www.youtube.com/watch?v=1zLfEqImGLI&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=45&pp=iAQB - Services in Angular
https://www.youtube.com/watch?v=cZV3_9oE8to&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=46&pp=iAQB - Creating a Service in Angular
https://www.youtube.com/watch?v=_8bz4FTNAV4&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=47&pp=iAQB - Dependency injection in Angular
https://www.youtube.com/watch?v=LKnN9PhvxOU&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=48&pp=iAQB - Hierarchical Injection in Angular */