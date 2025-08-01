import { Component } from '@angular/core';

@Component({
  selector: 'app-plus-minus',
  imports: [],
  templateUrl: './plus-minus.html',
  styleUrl: './plus-minus.css'
})
export class PlusMinus {
 value: number = 0;

  plus() {
    this.value++;
  }

  minus() {
    this.value--;
  }

}
