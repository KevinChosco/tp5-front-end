import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { VentasTicketService } from '../../services/ventas-ticket.service';
import { Espectador } from '../../models/espectador';
import { EspectadorService } from '../../services/espectador.service';
import { NgFor } from '@angular/common';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [FormsModule,RouterLink,NgFor],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css',
})

export class Punto3Component {
  accion!:string;
  ticket!:Ticket;
  categoria!:Categoria;
  espectadores!:Array<Espectador>;
  categorias!:Array<Categoria>;
  tipoEspectador!:string;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ventasService: VentasTicketService,private espectadorService:EspectadorService, private categoriaService:CategoriaService) {
    this.iniciarVariable();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']=="0"){
        this.accion = "new";
        this.iniciarVariable();
        this.cargarEspectadores();
        this.cargarCategorias();
      }else{
        this.accion="update";
        this.cargarTicket(params['id']);
        this.cargarEspectadores();
        this.cargarCategorias();
      }
    })
  }

  iniciarVariable(){
    this.ticket=new Ticket();
    this.categoria=new Categoria();
    this.espectadores=new Array<Espectador>();
    this.categorias=new Array<Categoria>();
  }

  cargarTicket(id:string){
    this.ventasService.getTicketById(id).subscribe(
      (result:any)=>{
        console.log(result);
        Object.assign(this.ticket,result);
        this.ticket.espectador = this.espectadores.find(agente=>(agente._id === this.ticket.espectador._id))!;
        this.ticket.categoriaBoleto = this.categorias.find(agente=>(agente._id === this.ticket.categoriaBoleto._id))!;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  cargarEspectadores(){
    this.espectadores=new Array<Espectador>();
    this.espectadorService.getEspectadores().subscribe(
      (result:any)=>{
        let vespectador: Espectador = new Espectador();
        result.forEach((element:any) => {
          Object.assign(vespectador,element);
          this.espectadores.push(vespectador);
          vespectador=new Espectador();
        });
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  cargarCategorias(){
    this.categorias=new Array<Categoria>();
    this.categoriaService.getCategorias().subscribe(
      (result:any)=>{
        let vcategoria: Categoria = new Categoria();
        result.forEach((element:any) => {
          Object.assign(vcategoria,element);
          this.categorias.push(vcategoria);
          vcategoria=new Categoria();
        });
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  public actualizarPrecio(tipoExpectador:string){
    if(tipoExpectador === "l"){
        this.ticket.precioTicket = 3000 * 0.8;
    } else if(tipoExpectador === "e"){
      this.ticket.precioTicket = 3000 ;
    } else {
        this.ticket.precioTicket = 0;
    }
}
agregar(){
  this.ventasService.addTicket(this.ticket).subscribe(
    (result:any)=>{
      console.log(result);
      if(result.status==1){
        this.router.navigate(['ticket'])
      }
    },
    (error:any)=>{
      console.log(error);
    }
  )
}

modificar(){
    this.ventasService.update(this.ticket).subscribe(
      (result:any)=>{
        console.log(result);
        if(result.status==1){
          this.router.navigate(['ticket'])
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )  
  }
  eliminar(){
    this.ventasService.delete(this.ticket).subscribe(
      (result:any)=>{
        console.log(result);
        if(result.status==1){
          this.router.navigate(['ticket'])
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

}

  


