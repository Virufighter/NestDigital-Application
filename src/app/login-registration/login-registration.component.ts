import { Component } from '@angular/core';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent {
  id=""
  fname=""
  lname=""
  hno=""
  hname=""
  sname=""
  pincode=""
  district=""
  state=""
  country=""
  phno=""
  email=""
  pname=""
  gender=""
  degree=""
  year=""
  date=""
  uname=""
  pass=""
  cpass=""
  readvalues=()=>{
    let data={"id":this.id,"fname":this.fname,"lname":this.lname,"hno":this.hno,"hname":this.hname,"district":this.district,"state":this.state,"country":this.country,"pincode":this.pincode,"phno":this.phno,"email":this.email,"pname":this.pname,"gender":this.gender,"degree":this.degree,"year":this.year,"date":this.date,"uname":this.uname,"pass":this.pass,"cpass":this.cpass}
    if (this.pass==this.cpass) {
      console.log(data)
      
    } else {
      alert("password mismatch")
      
    }

  }

}
