import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [ // here we define the routes
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'Home', pathMatch: "full" },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Courses/Course/:id', component: CourseComponent },
  { path: '**', component: ErrorComponent } // error page, should be here, after all the other routes
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // it is important fot the routing
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Angular Router
https://www.youtube.com/watch?v=Yg7YsoW3QVk&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=67&pp=iAQB - Passing Fragments to Route */