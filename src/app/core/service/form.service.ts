import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Causa } from 'src/app/models/causa';
import { Problemas } from 'src/app/models/problemas';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private firestore: Firestore) { }

  getProblemas(): Observable<Problemas[]>{
    let ciudadId = collection(this.firestore, "problema")
    return collectionData(ciudadId, {
      idField: 'id',
    }) as Observable<Problemas[]>;
  }

  getCausas(): Observable<Causa[]>{
    let ciudadId = collection(this.firestore, "causa")
    return collectionData(ciudadId, {
      idField: 'id',
    }) as Observable<Causa[]>;
  }
}
