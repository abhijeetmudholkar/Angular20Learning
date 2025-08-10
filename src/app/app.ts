import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from "./compnents/control-flow/control-flow";
import { PlusMinus } from "./compnents/plus-minus/plus-minus";
import { TicketCheck } from "./compnents/ticket-check/ticket-check";
import { Home } from "./compnents/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, TicketCheck, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('controlFlow');

  navItems = [
  { label: 'Home', link: '', icon: 'fas fa-home' },
  { label: 'Practice', link: 'Programs', icon: 'fas fa-laptop-code' },
  { label: 'Control Flow', link: 'control-flow', icon: 'fas fa-random' },
  { label: 'Plus/Minus', link: 'plus-minus', icon: 'fas fa-plus-minus' },
  { label: 'Ticket Check', link: 'ticket-check', icon: 'fas fa-ticket-alt' },
  { label: 'Attribute Dir', link: 'AttDirective', icon: 'fas fa-magic' },
  { label: 'Pipes', link: 'pipes', icon: 'fas fa-filter' },
  { label: 'Get API', link: 'Get-API', icon: 'fas fa-database' },
  { label: 'User', link: 'user', icon: 'fas fa-users' },
  { label: 'ReactiveForm', link: 'reactive-form', icon: 'fas fa-users' },
  { label: 'More', link: 'more', icon: 'fas fa-ellipsis-h' } // Add more dynamically
];

}
