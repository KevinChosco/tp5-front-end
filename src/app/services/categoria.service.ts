import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private _http:HttpClient) { }

  getCategorias():Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get('http://localhost:3000/api/categoria',httpOption);
  }
}
