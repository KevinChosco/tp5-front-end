import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  getTickets(categoriaEspectador?:string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    if (categoriaEspectador !== undefined) {
      httpOption.params = httpOption.params.set('categoriaEspectador', categoriaEspectador.toString());
    }
    return this._http.get('http://localhost:3000/api/ticket',httpOption);
  }
}
