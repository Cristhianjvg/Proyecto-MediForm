import { DocumentReference } from "@angular/fire/firestore";

export interface Hospital {
    id?: number;
    NombreCiudad: DocumentReference;
    NombreHospital: String;
}
