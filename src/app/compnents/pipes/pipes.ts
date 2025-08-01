import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DatePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  name :string = 'Abhijeet mudholkar'
  rollNo : number[] = [1,2,3,4,5,6,7,8]
  data :any = {
    name:'Abhijeet',
    contact:7620651831,
    city:'Nagpur'
  }
  currentDate :Date = new Date()

}
