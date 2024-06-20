import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class VentasTicketService {

  urlBase:string="http://localhost:3000/api/ticket/"
  constructor(private _http:HttpClient) {
    
   }

   getTickets():Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase,httpOption);
   }
   getTicketById(id:string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase+id,httpOption);
  }
  
  update(ticket:Ticket):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
    }
    let body:any = JSON.stringify(ticket);
    return this._http.put(this.urlBase+ticket._id,body,httpOption);
  }
  
  addTicket(ticket:Ticket):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
    }
    let body:any = JSON.stringify(ticket);
    return this._http.post(this.urlBase,body,httpOption);
  }
  delete(ticket:Ticket):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
    }
    return this._http.delete(this.urlBase+ticket._id,httpOption);
  }
  
}
