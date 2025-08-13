import { Component, inject } from '@angular/core';
import { Master } from '../../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lay-out',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './lay-out.html',
  styleUrl: './lay-out.css'
})
export class LayOut {

  
  loggedUserName : string = '';
  router = inject(Router)

  constructor(private masterService : Master) {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    this.readLoggedData();
    this.masterService.onLogin.subscribe((res)=>{
      this.readLoggedData();
    })

    
  }
  }

  readLoggedData(){
    const loggedData = localStorage.getItem("Welcome");
    if (loggedData != null) {
      this.loggedUserName = loggedData;
    }
  }

  logOut(){
    localStorage.removeItem("Welcome");
    this.readLoggedData();
    this.router.navigateByUrl("")
    this.loggedUserName = ""
  }


}
