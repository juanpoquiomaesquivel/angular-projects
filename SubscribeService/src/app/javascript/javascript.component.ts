import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [EnrollService] // it is necessary for the class to write this line (unless hierarchical DI)
})
export class JavascriptComponent {
  title = "JavaScript";

  constructor(private enrollService: EnrollService) {

  }

  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}