import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service: CoursesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  course;
  courseId;
  RouterParamObservable;
  editMode: boolean = false;

  ngOnInit(): void {
    // this.courseId = this.activatedRoute.snapshot.params['id']; // old approach
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id'); // this will not update *same
    // this.course = this.service.courses.find(x => x.id == this.courseId);
    this.RouterParamObservable = this.activatedRoute.paramMap.subscribe(
      (param) => {
        this.courseId = param.get('id');
        this.course = this.service.courses.find(x => x.id == this.courseId);
      }
    );

    // using snap shot
    // this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit')); // this will not update, but works *same

    // using an observable
    this.activatedRoute.queryParamMap.subscribe(
      (param) => {
        this.editMode = Boolean(param.get('edit'));
      }
    );
  }

  ngOnDestroy(): void {
    this.RouterParamObservable.unsubscribe();
  }

  appendQueryParam() {
    this.router.navigate(['/Courses/Course', this.courseId], {queryParams: {edit: true}});
  }
}