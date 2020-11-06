import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private REST_API_SERVER="https://back-web-ids-ada-chanona.herokuapp.com/"
  constructor(private httpClient:HttpClient) {}

  public getRegistro() {
    let user = JSON.parse(localStorage.getItem('user'))
    let token= user ['token']
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ token
      })
    };
    return this.httpClient.get(`${this.REST_API_SERVER}api/v1/dashboard/registros/`,httpOptions);
  }

  addRegistro(nombreCompleto: string, edad: string,correo: string):Observable<any>{
    let user = JSON.parse(localStorage.getItem('user'))
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpClient.post(`${this.REST_API_SERVER}api/v1/dashboard/registros/`,{nombreCompleto,edad,correo},httpOptions);
  }

  deleteRegistro(id: string):Observable<any>{
    let user = JSON.parse(localStorage.getItem('user'))
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpClient.delete(`${this.REST_API_SERVER}api/v1/dashboard/registros/${id}`,httpOptions);
  }

  updateRegistro(id: string, nombreCompleto: string, edad:string,correo:string):Observable<any>{
    let user = JSON.parse(localStorage.getItem('user'))
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpClient.put(`${this.REST_API_SERVER}api/v1/dashboard/registros/${id}`,{nombreCompleto,edad,correo},httpOptions);
  }

  getSingleRegistro(id: string){
    let user = JSON.parse(localStorage.getItem('user'))
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.httpClient.get(`${this.REST_API_SERVER}api/v1/dashboard/registros/${id}`,httpOptions);
  }
}
