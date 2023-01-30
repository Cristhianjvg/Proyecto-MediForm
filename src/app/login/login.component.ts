import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators} from '@angular/forms';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public f = this.form.group({
    NombreUsuario: ['', Validators.required],
    ContrasenaUsuario: ['', Validators.required]
  })

  formSubmitted = false;

  constructor(private form : FormBuilder){

  }

  ngOnInit(): void{

  }

  login(){

    this.formSubmitted = true;
    console.log("this.f", this.f);

    const data: Usuario = {
      NombreUsuario : this.f.controls.NombreUsuario.value,
      ContrasenaUsuario: this.f.controls.ContrasenaUsuario.value
    } as Array<Usuario>;

    console.log(data);
  }

}
