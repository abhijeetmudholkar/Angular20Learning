import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm implements OnInit {
   http = inject(HttpClient);
   users : any[] = [];

   userForm : FormGroup = new FormGroup({
    userId : new FormControl(0),
    emailId : new FormControl(''),
    password : new FormControl(''),
    fullName : new FormControl(''),
    mobileNo : new FormControl('')
   })

   ngOnInit(): void {
       this.getUsers();
   }

   getUsers(){
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((res:any)=>{
        this.users=res;
    })
   }

    postUser() {
    debugger;
    const usersObj = this.userForm.value;
    this.http
      .post(
        'https://api.freeprojectapi.com/api/GoalTracker/register',
        usersObj
      )
      .subscribe({
        next: (res: any) => {
          alert('User added successfully');
          this.getUsers();
        },
        error: (err) => {
          alert(err.error);
        },
      });
  }
}
