import { Categoria } from "./categoria";
import { Espectador } from "./espectador";

export class Ticket {
    _id!:string;
    precioTicket:number;
    categoriaEspectador:string;
    fechaCompra:string;
    espectador:Espectador;
    categoriaBoleto:Categoria;

    constructor(){
        this.precioTicket=0;
        this.categoriaEspectador="";
        this.fechaCompra="";
        this.espectador=new Espectador();
        this.categoriaBoleto=new Categoria();
    }
}
