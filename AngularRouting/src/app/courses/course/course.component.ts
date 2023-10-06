import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service: CoursesService, private activatedRoute: ActivatedRoute) { }

  course;
  courseId;

  ngOnInit(): void {
    // this.courseId = this.activatedRoute.snapshot.params['id']; // old approach
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.course = this.service.courses.find(x => x.id == this.courseId);
  }

}