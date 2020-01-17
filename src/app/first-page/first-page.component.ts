import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  inputText: string = ""
  data = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  ShowOutput() {
    this.data = [];
    this.inputText.split("").forEach((item) => {
      let findIndex = this.data.findIndex((x) => (x.name == item));
      if (findIndex > -1) {
        this.data[findIndex].count++;
      } else {
        this.data.push({
          name: item,
          count: 1
        })
      }
    })
  }

  clearData() {
    this.inputText = ""
    this.data = [];
  }

  goToFirstPage() {
    this.router.navigate(['firstPage'])
  }
  goToSecondPage() {
    this.router.navigate(['secondPage'])
  }

}
