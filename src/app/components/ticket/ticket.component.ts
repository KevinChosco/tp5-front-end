import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { VentasTicketService } from '../../services/ventas-ticket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  tickets:Array<Ticket>=[];
  ticketsFiltrados:Array<Ticket>=[];
  categoriaEspectador!:string;
  ticketes:Array<Ticket>=[];

  constructor(private ticketService:TicketService, private router:Router,private ventasService:VentasTicketService, ){
    this.tickets=new Array<Ticket>;
    this.ticketsFiltrados=new Array<Ticket>;
    this.obtenerTickets();
  }

  agregar(){
    this.router.navigate(['ticket',0]);
  }



  obtenerTickets() {
    this.tickets=[];
    this.ticketsFiltrados=[];
    this.ticketService.getTickets().subscribe(
      (result: any) => {
        result.forEach((element: any) => {
          let vticket = new Ticket();
          Object.assign(vticket, element);
          if(this.categoriaEspectador==vticket.categoriaEspectador){
            this.ticketsFiltrados.push(vticket);
          }
            this.tickets.push(vticket);
          
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  modificar(ticket:Ticket){
    this.router.navigate(['ticket', ticket._id]);
  }
  eliminar(ticket:Ticket){
    this.ventasService.delete(ticket).subscribe(
      (result:any)=>{
        console.log(result);
        if(result.status==1){
          this.router.navigate(['ticket'])
          this.tickets=new Array<Ticket>;
          this.obtenerTickets();
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
}
