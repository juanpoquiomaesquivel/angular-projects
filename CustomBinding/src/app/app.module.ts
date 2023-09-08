import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // to use ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Data Binding
https://www.youtube.com/watch?v=O50sbGhm2yE&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=25&pp=iAQB - Custom event Binding: @Output Decorator */