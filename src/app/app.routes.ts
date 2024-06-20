import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { ConversorFormComponent } from './components/conversor-form/conversor-form.component';
import { ConversorDivisasComponent } from './components/conversor-divisas/conversor-divisas.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { TicketComponent } from './components/ticket/ticket.component';

export const routes: Routes = [
    {
        path:'producto',
        component:ProductoComponent
    },
    {
        path:'producto-form/:id',
        component:ProductoFormComponent
    },
    {
        path:'conversor',
        component:ConversorComponent
    },
    {
        path:'conversor-form/:id',
        component:ConversorFormComponent
    },
    {
        path:'conversor/divisas',
        component: ConversorDivisasComponent
    },
    {
        path:"ticket",
        component:TicketComponent
    },
    {
        path:'ticket/:id',
        component:Punto3Component
    }
];
