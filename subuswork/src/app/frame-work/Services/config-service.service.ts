import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private afs: AngularFirestore) { }

  fetchConfig() {
    let data;
    data  = this.afs.doc<any>('ElementConfig');
    console.log(data);
    return data;
  }
}
