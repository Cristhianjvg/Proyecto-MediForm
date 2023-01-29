import { DocumentReference } from "@angular/fire/firestore";

export interface Problemas {

    id?: number;
    DescripcionProblema: string;
    TipoProblema: DocumentReference;
}
