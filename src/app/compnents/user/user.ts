import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  userObj = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: '',
  };

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    debugger;
    this.http
      .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((data: any) => {
        this.userList = data;
      });
  }

  postUser() {
    debugger;
    this.http
      .post(
        'https://api.freeprojectapi.com/api/GoalTracker/register',
        this.userObj
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

  // deleteUser(id:any){
  //  const cnfDelete  = confirm('You want to delete!')
  //  if(cnfDelete){
  //   this.http.delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id='+id).subscribe({
  //    next: (res: any) => {
  //     alert("User Deleted successfully");
  //     this.getUsers();
  //   },
  //   error: (err) => {
  //     alert(err.error);
  //   }
  //  })
  //  }

  // }((

  reset() {
    this.userObj = {
      userId: 0,
      emailId: '',
      password: '',
      fullName: '',
      mobileNo: '',
    };
  }
  putUser() {
    this.http
      .put(
        'https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' +
          this.userObj.userId,
        this.userObj
      )
      .subscribe({
        next: () => {
          alert('User Updated');
          this.getUsers();
        },
      });
  }

  deleteUser(id: any) {
    const cnfdlt = confirm('you want to delte');

    if (cnfdlt) {
      this.http
        .delete(
          'https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' +
            id
        )
        .subscribe({
          next: (value: any) => {
            alert('User Deleted');
            this.getUsers();
          },
        });
    }
  }

  editUser(item: any) {
    this.userObj = item;
  }
}
