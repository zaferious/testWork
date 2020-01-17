import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goToFirstPage() {
    this.router.navigate(['firstPage'])
  }
  goToSecondPage() {
    this.router.navigate(['secondPage'])
  }
}
