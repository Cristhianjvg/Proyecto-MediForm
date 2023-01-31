import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {

    switch (code) {
      case 'auth/email-already-in-use':
        return 'El correo ya existe'
      case 'auth/weak-password':
        return 'La contraseña es muy debil'
      case 'auth/wrong-password':
        return ' La contraseña es incorrecta'
      case 'auth/user-not-found':
        return 'El usuario no existe'
      default:
        return 'Error desconocido'
    }

  }
}
