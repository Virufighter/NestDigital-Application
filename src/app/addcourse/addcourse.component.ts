import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})

export class AddcourseComponent {
  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""

  constructor(private api:ApiService){}

  readValue=()=>{
    let data={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDate":this.courseDate,"courseDuration":this.courseDuration,"courseVenue":this.courseVenue}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Course added Successfully")
          this.courseTitle=""
          this.courseDescription=""
          this.courseDuration=""
          this.courseDate=""
          this.courseVenue=""

          
        } else {
          alert("Something wrong")
          
        }
      }
    )

  }

}
