import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent {
  mostrar:boolean=true;
  email!:string;
  transacciones: Array<Transaccion>=[];
  transaccionesByEmail: Array<Transaccion>=[];
  constructor(private router:Router, private transaccionService:TransaccionService){
    this.transacciones=new Array<Transaccion>;
    this.obtenerProductos();
  }
  modificar(){
    this.mostrar=false;
  }
  agregar(){
    this.router.navigate(['conversor-form',0]);
  }
  obtenerProductos() {
    this.transaccionesByEmail = [];
    this.transaccionService.getTransacciones(this.email).subscribe(
      (result: any) => {
        result.forEach((element: any) => {
          let vtransaccion = new Transaccion();
          Object.assign(vtransaccion, element);
            this.transacciones.push(vtransaccion);
            if(vtransaccion.emailCliente==this.email){
              this.transaccionesByEmail.push(vtransaccion);
            }
            
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  volver(){
    this.mostrar=true;
  }
  buscar(){
    this.router.navigate(['conversor/divisas'])
  }
}
