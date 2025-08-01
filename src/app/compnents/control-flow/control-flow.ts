import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule, ],  // ✅ Needed for [(ngModel)] and @if
  templateUrl: './control-flow.html',
  styleUrls: ['./control-flow.css']  // ✅ Corrected: styleUrls[]
})
export class ControlFlowComponent {
  month : string = "";
  name: string = '';
  age: number | null = null;  // ✅ Use lowercase `number`, and allow null
  isparaVisible : boolean = true
  character : string = ''

  names:any = ['abhi', 'dhanu','uddesh','adesh'] 

  data :any [] =[
    {name:'abhijeet',city:'nagpur',isActive:true},
    {name:'dhananjay',city:'nagpur',isActive:true},
    {name:'uddesh',city:'banglore',isActive:false},
    {name:'rahul',city:'amravati',isActive:true}
  ]

  showP(){
    this.isparaVisible= true;
  }

  hideP(){
    this.isparaVisible= false;
  }

  get backgroundImageUrl(): string {
    const name = this.character.trim().toLowerCase();

    if (name === 'demon slayer') {
      return "url('https://wallpapers.com/images/featured/demon-slayer-4k-pictures-5v5lz47uso2tx2kr.jpg')";
    } else if (name === 'demon') {
      return "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8Xere9U4tl5B0fUPEonkZlfAyThBmL6Jyg&s')";
    } else if (name === 'hashira') {
      return "url('https://images7.alphacoders.com/135/1354882.jpeg')";
    } else if (name) {
      return "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVoUcROR4EQ0W9ih2_M9pmUUhGN15nMhDxU2M7n3m64JE9jpbQVogv0JcJgSN1A7VyOE&usqp=CAU')";
    } else {
      return "none"; // If nothing is typed
    }
  }
  

}
