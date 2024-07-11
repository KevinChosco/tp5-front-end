import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
//import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {

  accion!:string;
  producto!:Producto;
/*constructor(private productoService:ProductoService,private activatedRoute:ActivatedRoute,private router:Router){
    this.iniciarVariable();
    
  }*/

  /*ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']=="0"){
        this.accion = "new";
        this.iniciarVariable();
      }else{
        this.accion="update";
        this.cargarProducto(params['id']);
      }
    })
  }
  iniciarVariable(){
    this.producto=new Producto();
  }
  addProducto(){
    this.productoService.addproduct(this.producto).subscribe(
      (result:any)=>{
        console.log(result);
        if(result.status==1){
          this.router.navigate(['producto'])
        }
      },
      (error:any)=>{
        console.log(error);
      }

    )
  }
  cargarProducto(id:string){
    this.productoService.getProductById(id).subscribe(
      (result:any)=>{
        console.log(result);
        Object.assign(this.producto,result);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  actualizar(){
    this.productoService.update(this.producto).subscribe(
      (result:any)=>{
        console.log(result);
        if(result.status==1){
          this.router.navigate(['producto'])
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )  
  }
  /*cargarProductos(id:string){
    this.productoService.getProductos(id).subscribe(
      (result:any)=>{
        console.log(result);
        Object.assign(this.sector,result);
        this.sector.responsable = this.agentes.find(agente=>(agente._id === this.sector.responsable._id))!;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }*/
}
