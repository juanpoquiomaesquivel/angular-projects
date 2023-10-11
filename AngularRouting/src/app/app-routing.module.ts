import { NgModule } from "@angular/core";
import { CourseComponent } from "./courses/course/course.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CoursesComponent } from "./courses/courses.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { RouterModule, Routes } from "@angular/router";
import { CourseGuardService } from "./course-guard.service";
import { CanDeactivateGuardService } from "./candeactivate-guard.service";
import { CourseResolveService } from "./course-resolve.service";

const appRoutes: Routes = [ // here we define the routes
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: 'Home', pathMatch: "full" },
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Contact', canDeactivate: [CanDeactivateGuardService] ,component: ContactComponent },
    { path: 'Courses', component: CoursesComponent, resolve: {courses: CourseResolveService} },
    // { path: 'Courses/Course/:id', component: CourseComponent },
    {
        path: 'Courses', canActivateChild: [CourseGuardService] ,children: [
            { path: 'Course/:id', component: CourseComponent }
        ]
    },
    { path: '**', component: ErrorComponent } // error page, should be here, after all the other routes
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {


}