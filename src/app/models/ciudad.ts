import { DocumentReference } from '@angular/fire/firestore';


export interface Ciudad {
    id?: string;
    NombreCiudad: string;
    NombreProvincia: DocumentReference;
    NumZona: number;
}

