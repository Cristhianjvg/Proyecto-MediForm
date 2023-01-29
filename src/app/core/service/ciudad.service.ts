import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc,} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})



export class CiudadService {

  

  constructor(private readonly firestore: Firestore) { 
    //this.Colleccion_ciudad = collection(this.firestore, 'ciudad');
  }

  getCiudad(): Observable<Ciudad[]>{
    let ciudadId = collection(this.firestore, "ciudad")
    return collectionData(ciudadId, {
      idField: 'id',
    }) as Observable<Ciudad[]>;
  }
}
