import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  email="krrrr";

  ngOnInit() {
  }
  OnButtonClick()
  {
    console.log("Button clicked");
  }
  OnKeyup()
  {
      console.log(this.email);
  }

}
