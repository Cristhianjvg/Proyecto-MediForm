import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collectionData, docData, addDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from '../core/service/firebase-code-error.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrarUsuario: FormGroup;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService, private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.registrarUsuario = this.fb.group({
      NombreUsuario: ['', Validators.required],
      ApellidoUsuario: ['', Validators.required],
      CelularUsuario: ['', Validators.required],
      UsuarioIngreso: ['', Validators.required],
      ContrasenaUsuario: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  registrar() {
    const NombreUsuario = this.registrarUsuario.value.NombreUsuario;
    const ApellidoUsuario = this.registrarUsuario.value.ApellidoUsuario;
    const CelularUsuario = this.registrarUsuario.value.CelularUsuario;
    const UsuarioIngreso = this.registrarUsuario.value.UsuarioIngreso;
    const ContrasenaUsuario = this.registrarUsuario.value.ContrasenaUsuario;

    this.afAuth.createUserWithEmailAndPassword(UsuarioIngreso, ContrasenaUsuario).then((user) => {
      console.log(user);
      this.router.navigate(['/login']);

    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError.codeError(error.code))
    })





    /*if (this.registrarUsuario.valid) {
      this.afs.collection('usuario').add(this.registrarUsuario.value);
    }*/
  }

  
}
