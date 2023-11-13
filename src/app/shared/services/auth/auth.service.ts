import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {}

  public signIn(email:string,password:string) {
    return this.auth.signInWithEmailAndPassword(email,password);
  }
  public signOut() {
    return this.auth.signOut();
  }
  get user(){
    return JSON.parse(localStorage.getItem('user') !!);
  }
}
