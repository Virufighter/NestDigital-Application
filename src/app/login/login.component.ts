import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user=""
  password=""
  constructor(private r:Router){}
  login=()=>{
    if (this.user=="1122" && this.password=="12345") {
      this.r.navigate(['/'])


      
    } else {
      alert("invalid creditials")
      
    }
  }

}
