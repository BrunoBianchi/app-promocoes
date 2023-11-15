import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  get Promocoes() {
    return this.db.collection('promocoes').get();
  }
  public Catergorias(categoria:string) { 
    return this.db.collection('promocoes').ref.where('option','==',`${categoria}`).get();
  }
  public removePromo(id:string) { 
    return this.db.collection('promocoes').doc(id).delete();
  }
  public edtiPromo(id:string,data:any) { 
    return this.db.collection('promocoes').doc(id).update(data);
  }
  constructor(private db:AngularFirestore,private auth:AngularFireAuth) { }
}
