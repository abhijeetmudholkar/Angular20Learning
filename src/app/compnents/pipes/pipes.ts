import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../customPipes/naPipe/na-pipe';
import { AppendPipe } from '../../customPipes/appendPipe/append-pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DatePipe,NaPipe,AppendPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  name :string = 'Abhijeet mudholkar'
  rollNo : number[] = [1,2,3,4,5,6,7,8]
  data :any = {
    name:'Dhananjay',
    contact:7620651831,
    city:'Nagpur',
    state:''
  }
  currentDate :Date = new Date()

}
