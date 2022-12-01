import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent {
  constructor(private api:ApiService){
    api.fetchCourse().subscribe(
      (response)=>{
        this.loading=false
        this.data=response
      }
    )
  }


  data:any={}
  loading:boolean=true

}
