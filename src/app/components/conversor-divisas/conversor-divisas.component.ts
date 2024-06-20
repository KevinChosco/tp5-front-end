import { Component } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversor-divisas',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './conversor-divisas.component.html',
  styleUrl: './conversor-divisas.component.css'
})
export class ConversorDivisasComponent {
  monedaOrigen!:string;
  monedaDestino!:string;
  transaccionesByDivisa:Array<Transaccion>=[];
  constructor(private transaccionService:TransaccionService, private router:Router){}

  obtenerListadoByDivisas(){
    this.transaccionesByDivisa=[];
    this.transaccionService.getTransaccionesByDivisa(this.monedaOrigen,this.monedaDestino).subscribe(
      (result:any)=>{
        console.log(result);
        result.forEach((element: any) => {
          let vtransaccion = new Transaccion();
          Object.assign(vtransaccion, element);
            this.transaccionesByDivisa.push(vtransaccion);
      });
    },
    (error:any)=>{
      console.log(error)
    }
    )
  }
  volver(){
    this.router.navigate(['conversor'])
  }
}
