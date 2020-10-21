import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  api:String="http://localhost:4200/";
  constructor(private httpClient:HttpClient) { }

  isAuthenticated():Boolean {
    let user=JSON.parse(localStorage.getItem('user'));

    if (user){
      return user['token']? true:false
    } else{
      return false
    }
  }

  login(userName:String, password:String):Observable<any> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
    return this.httpClient.post(`${this.api}api/v1/login/`,{userName, password}, httpOptions)
  }
}
