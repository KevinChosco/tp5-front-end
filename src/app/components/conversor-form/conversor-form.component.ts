import { Component } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversor-form',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './conversor-form.component.html',
  styleUrl: './conversor-form.component.css'
})
export class ConversorFormComponent {

  transaccion!:Transaccion;
  todasLasMonedas: any[] = [];
  constructor(private transaccionService:TransaccionService,private router:Router){
    this.iniciarVariable();
  }
  iniciarVariable(){
    this.transaccion= new Transaccion();
    //this.obtenerDivisas();
  }

  obtenerDivisas(){
    this.transaccionService.getSymbols().subscribe(
      (result:any)=>{
        console.log(result);
        this.todasLasMonedas = Object.entries(result.symbols).map(([codigo, descripcion]) => ({codigo, descripcion}));
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  convertDivisas(){
    this.transaccionService.convertDivisa(this.transaccion).subscribe(
      (result:any)=>{
        console.log(result);
        this.transaccion.cantidadDestino=result.result;
        this.guardarTransaccion();
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  guardarTransaccion(){
    this.transaccionService.addTransaccion(this.transaccion).subscribe(
      (result:any)=>{
        console.log(result);
        if(result.status==1){
          this.router.navigate(['conversor'])
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

}
