import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // we need to call the ActivatedRoute to use the relative paths (to use relativeTo)
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  GoToHome() {
    // this.router.navigate(['Home']/*, { relativeTo: this.route }*/) //localhost:4200/About/Home, if we use the relativeTo, if not it uses the absolute path
    this.router.navigateByUrl('Home');
  }
}