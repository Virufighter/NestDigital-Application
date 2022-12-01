import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin=""
  password=""
  constructor(private r:Router){}
  login=()=>{
    if (this.admin=="admin" && this.password=="nestdigital") {
      this.r.navigate(['/viewcourse'])

      
    } else {
      alert("Invalid creditials")
      
    }

  }


}
