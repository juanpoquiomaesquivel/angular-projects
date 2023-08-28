import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification"> 
                This website uses cookies to provide better user experience.
              </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align:center;}", "p{font-size: 14px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification:boolean = false;
}