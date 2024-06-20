import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlBase:string='http://localhost:3000/api/producto/';
  constructor(private _http:HttpClient) { }

  getProductos(destacado?:boolean):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    if (destacado !== undefined) {
      httpOption.params = httpOption.params.set('destacado', destacado.toString());
    }
    return this._http.get(this.urlBase,httpOption)
  }
  addproduct(producto:Producto):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    let body:any = JSON.stringify(producto)
    return this._http.post(this.urlBase,body,httpOption);
  }
  getProductById(id:string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase+id,httpOption);
  }
  update(producto:Producto):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
    }
    let body:any = JSON.stringify(producto);
    return this._http.put(this.urlBase+producto._id,body,httpOption);
  }
  delete(producto:Producto):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.delete(this.urlBase+producto._id,httpOption);
  }
}
