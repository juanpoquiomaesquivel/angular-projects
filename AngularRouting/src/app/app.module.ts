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
    RouterModule.forRoot(appRoutes) // it is important fot the routing
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Angular Router
https://www.youtube.com/watch?v=OMX6Wcx2yZA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=58&pp=iAQB - What is Routing in Angular
https://www.youtube.com/watch?v=mmappaGCZ2s&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=59&pp=iAQB - Implement Page not found Route
https://www.youtube.com/watch?v=7YLXCqT_EDc&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=60&pp=iAQB - Configuring navigation links for Route
https://www.youtube.com/watch?v=n3lisFV1aN4&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=61&pp=iAQB - Styling Active link using routerLinkActive
https://www.youtube.com/watch?v=qnTm0mk1R0Y&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=62&pp=iAQB - Absolute and Relative Route Paths
https://www.youtube.com/watch?v=H-1Pb9zXmkY&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=63&pp=iAQB - Navigate between Routes Programmatically
https://www.youtube.com/watch?v=5k2ZUhMh6tA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=64&pp=iAQB - Passing Parameters to Route */