import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth, User } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public user: User;
  api:String="http://localhost:4200/";
  constructor(private httpClient:HttpClient, private afAuth : AngularFireAuth) { }

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

  async loginGoogle( ){
    try {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    } catch (error) {
      console.log(error);
    }
  }
}
