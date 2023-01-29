import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincias } from 'src/app/models/provincias';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc,} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor( private firestore :Firestore) { }

  getProvincias(): Observable<Provincias[]>{
    let ciudadId = collection(this.firestore, "provincia")
    return collectionData(ciudadId, {
      idField: 'id',
    }) as Observable<Provincias[]>;
  }
}
