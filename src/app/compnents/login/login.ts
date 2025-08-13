import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  router = inject(Router)
  masterSerive = inject(Master)

  logObj : any ={
    username : "",
    password : ""
  }

  onLogin(){
    if(this.logObj.username == "Abhijeet" && this.logObj.password == "1234"){
      this.router.navigateByUrl('/home');
      localStorage.setItem("Welcome","home")
      this.masterSerive.onLogin.next(true);
    }
    else{
      alert("Invalid Credentials")
    }
  }

}
