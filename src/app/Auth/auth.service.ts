import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth, User } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  constructor(private afAuth : AngularFireAuth) { }

  async loginGoogle( ){
    try {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    } catch (error) {
      console.log(error);
    }
  }
}
