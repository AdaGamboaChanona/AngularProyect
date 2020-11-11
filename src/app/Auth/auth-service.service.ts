import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth, User } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public usuario: User;
  api:String="https://back-web-ids-ada-chanona.herokuapp.com/";
  constructor(private httpClient:HttpClient, private afAuth : AngularFireAuth) { }

  isAuthenticated():Boolean {
    let usuario=JSON.parse(localStorage.getItem('user'));

    if (usuario){
      return usuario['token']? true:false
    } else{
      return false
    }
  }

  login(username:String, password:String):Observable<any> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
    return this.httpClient.post(`${this.api}api/v1/login/`,{username, password}, httpOptions)
  }
// registros generales
  getRegistro() {
    let user= JSON.parse(localStorage.getItem('user'));
    let token= user ['token']
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ token
      })
    };
    return this.httpClient.get(`${this.api}api/v1/dashboard/registrosGeneralDash/`, httpOptions)
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
    return this.httpClient.post(`${this.api}api/v1/dashboard/registrosGeneralDash/`,{nombreCompleto,edad,correo},httpOptions);
  }

  //registros especificos
  getOneUser(id:String){
    let user=JSON.parse(localStorage.getItem('user'));
    let token= user ['token'];
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ token
      })
    };
    return this.httpClient.get(`${this.api}api/v1/dashboard/registrosEspecificosDash/`,httpOptions)

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
    return this.httpClient.delete(`${this.api}api/v1/dashboard/registrosEspecificosDash/${id}`,httpOptions);
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
    return this.httpClient.put(`${this.api}api/v1/dashboard/registrosEspecificosDash/${id}`,{nombreCompleto,edad,correo},httpOptions);
  }

  async loginGoogle( ){
    try {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    } catch (error) {
      console.log(error);
    }
  }
}
