import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Hospital } from 'src/app/models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private firestore: Firestore) {  }

  getHospital(): Observable<Hospital[]>{
    let hospitales = collection(this.firestore, "hospital")
    return collectionData(hospitales, {
      idField: 'id',
    }) as Observable<Hospital[]>;
  }
}
