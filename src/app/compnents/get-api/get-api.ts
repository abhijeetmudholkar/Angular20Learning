import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-get-api',
  imports: [JsonPipe],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetAPI implements OnInit {
http = inject(HttpClient);
userList :any[] = [];
getAllUsers : any[]=[];

ngOnInit(): void {
    this.getUsers();
    this.getBusUsers();
}

getUsers(){
  this.http.get('https://dummyjson.com/users').subscribe((result:any)=>{
    this.userList = result.users;
    // console.log(result)
  },(error)=>{
    alert(error);
  }
)
}
getBusUsers(){
  this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers').subscribe((res:any)=>{
    this.getAllUsers = res.data;
    // console.log('hello',res.data)
  },(error)=>{
    alert(error);
  }
)
}

}
