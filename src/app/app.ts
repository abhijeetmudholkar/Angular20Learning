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
}
