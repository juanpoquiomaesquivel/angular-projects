import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Components
https://www.youtube.com/watch?v=nt_yiyyCBCs&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=23&pp=iAQB - What is Child Component

Data Binding
https://www.youtube.com/watch?v=PzSSsz5AWHs&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=24&pp=iAQB - Custom Property Binding: @Input Decorator */