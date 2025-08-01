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

ngOnInit(): void {
    this.getUsers();
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

}
