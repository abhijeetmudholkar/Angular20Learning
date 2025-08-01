import { Component, NgModule, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-practice-program',
  imports: [FormsModule],
  templateUrl: './practice-program.html',
  styleUrl: './practice-program.css'
})
export class PracticeProgram {
  placeholder =signal<string>('Enter your Subject Marks')
  sub1 : number = 0
  sub2 : number = 0
  sub3 : number= 0
  total:number = 0

  checkNo : number = 0
  checkResult : string = ''

  num1 : number = 0
  num2 : number = 0
  numTotal : number = 0
  
  totalMarks(){
    this.total = this.sub1 +this.sub2+this.sub3
  }

  checkEvenOdd(){
    this.checkResult = this.checkNo % 2 === 0 ? 'Even' : 'Odd';
    console.log(this.checkResult)
  }

  plus(){
    this.numTotal = this.num1 + this.num2;
  }
  minus(){
    this.numTotal = this.num1 - this.num2;
  }
  multi(){
    this.numTotal = this.num1 * this.num2;
  }
  div(){
    this.numTotal = this.num1 / this.num2;
  }

}
