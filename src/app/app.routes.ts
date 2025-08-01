import { Routes } from '@angular/router';
import { ControlFlowComponent } from './compnents/control-flow/control-flow';
import { PlusMinus } from './compnents/plus-minus/plus-minus';
import { TicketCheck } from './compnents/ticket-check/ticket-check';
import { Home } from './compnents/home/home';
import { AttDirective } from './compnents/att-directive/att-directive';
import { Pipes } from './compnents/pipes/pipes';
import { GetAPI } from './compnents/get-api/get-api';
import { PracticeProgram } from './compnents/practice-program/practice-program';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'control-flow',
        component:ControlFlowComponent
    },
    {
        path:'plus-minus',
        component:PlusMinus
    },
    {
        path:'ticket-check',
        component:TicketCheck
    },
    {
        path:'AttDirective',
        component:AttDirective

    },
    {
        path:'pipes',
        component:Pipes

    },
    {
        path:'Get-API',
        component:GetAPI

    },
    {
        path:'Programs',
        component:PracticeProgram

    },
];
