import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get Users() {
    return this.db.collection('users/').ref.get();
  }
  public removeUser(uid:string) { 
    return this.db.collection('users').doc(uid).delete();
  }
  constructor(private db:AngularFirestore,private auth:AngularFireAuth) { }
}
