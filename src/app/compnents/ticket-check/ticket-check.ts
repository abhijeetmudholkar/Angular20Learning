import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-check',
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './ticket-check.html',
  styleUrl: './ticket-check.css'
})
export class TicketCheck {
name: string = '';
  age: number | null = null;
  rating: string = '';

  ratings: string[] = ['U', 'U/A', 'A'];
}
