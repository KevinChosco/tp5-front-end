import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  productos: Array<Producto>=[];
  productosNoDest: Array<Producto>=[];
  constructor(private router:Router,private productoService:ProductoService){
    this.productos=new Array<Producto>;
    this.obtenerProductos();
  }

  agregar(){
    this.router.navigate(['producto-form',0]);
  }
  obtenerProductos() {
    this.productoService.getProductos().subscribe(
      (result: any) => {
        result.forEach((element: any) => {
          let vproducto = new Producto();
          Object.assign(vproducto, element);
          if (vproducto.destacado) {
            this.productos.push(vproducto);
          } else {
            this.productosNoDest.push(vproducto);
          }
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
  modificar(producto:Producto){
    this.router.navigate(['producto-form', producto._id]);
  }
  eliminar(producto:Producto){
    this.productoService.delete(producto).subscribe(
      (result:any)=>{
        console.log(result)
        this.productos=[];
        this.productosNoDest=[];
        this.obtenerProductos();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
