import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from "./compnents/control-flow/control-flow";
import { PlusMinus } from "./compnents/plus-minus/plus-minus";
import { TicketCheck } from "./compnents/ticket-check/ticket-check";
import { Home } from "./compnents/home/home";
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('controlFlow');

  // loggedUserName : string = '';
  // router = inject(Router)

  // constructor(private masterService : Master) {
  // if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  //   this.readLoggedData();
  //   this.masterService.onLogin.subscribe((res)=>{
  //     this.readLoggedData();
  //   })

    
  // }
  // }

  // readLoggedData(){
  //   const loggedData = localStorage.getItem("Welcome");
  //   if (loggedData != null) {
  //     this.loggedUserName = loggedData;
  //   }
  // }

  // logOut(){
  //   localStorage.removeItem("Welcome");
  //   this.readLoggedData();
  //   this.router.navigateByUrl("")
  //   this.loggedUserName = ""
  // }

 
}
