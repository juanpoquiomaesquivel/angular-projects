import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollService] // if we inject the dependency here **...
})
export class AppComponent {
  constructor(private enrollService: EnrollService) {

  }
  title = 'SubscribeService';
}