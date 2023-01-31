import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, NgForm } from '@angular/forms';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from '../core/service/firebase-code-error.service';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginUsuario: FormGroup

  

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService, private router: Router,
    private firebaseError: FirebaseCodeErrorService){
      this.loginUsuario = this.fb.group({
        UsuarioIngreso: ['', Validators.required],
        ContrasenaUsuario: ['', Validators.required]
      })
  }

  ngOnInit(): void{

  }

  login(){
    const email = this.loginUsuario.value.UsuarioIngreso;
    const password = this.loginUsuario.value.ContrasenaUsuario;

    this.afAuth.signInWithEmailAndPassword(email, password).then((user) =>{
      console.log(user);
      this.router.navigate(['/pr-ciudad'])
      
    }).catch((error) => {

      console.log(error);
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error')
      
    })
  }



}
