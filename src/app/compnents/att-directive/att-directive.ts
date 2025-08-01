import { NgClass, NgStyle } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective {
divClassname = signal<string>("");
divStyle :boolean =true;

setBgClass(className:string){
  this.divClassname.set(className)
}

changeToggle(){
  this.divStyle = ! this.divStyle
}
}
