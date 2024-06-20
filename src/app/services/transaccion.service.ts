import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase:string="http://localhost:3000/api/transaccion/";
  constructor(private _http:HttpClient) { }

  public getSymbols():Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'x-rapidapi-key': 'd4ac0e7308msh3978f7762015ca3p15b6dcjsn46994093e23d',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      })
    }
    return this._http.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols',httpOption);
  }
  convertDivisa(transaccion:Transaccion):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'x-rapidapi-key': 'd4ac0e7308msh3978f7762015ca3p15b6dcjsn46994093e23d',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      })
    }
    return this._http.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from='+transaccion.monedaOrigen+'&to='+transaccion.monedaDestino+'&amount='+transaccion.cantidadOrigen,httpOption);
  }

  getTransacciones(emailCliente:string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    if (emailCliente !== undefined) {
      httpOption.params = httpOption.params.set('emailCliente', emailCliente.toString());
    }
    return this._http.get(this.urlBase,httpOption)
  }
  addTransaccion(transaccion:Transaccion):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    let body:any = JSON.stringify(transaccion)
    return this._http.post(this.urlBase,body,httpOption);
  }
  getTransaccionesByDivisa(monedaOrigen:string,monedaDestino:string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase+monedaOrigen+'/'+monedaDestino,httpOption)
  }
}
