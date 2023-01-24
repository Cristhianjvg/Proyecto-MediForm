import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  Formulario: FormGroup;

  constructor(private fb: FormBuilder ,private firestore: Firestore){
    this.Formulario = new FormGroup({

    })
    
  }

  ngOnInit(): void {
    
  }

  private initForm(): void{
    /*this.contactForm = this.fb.group({
      problematica: ['',[Validators.required]]
    });*/

  }

  /*Onsubmit(){
    console.log(this.form)
  }*/

}
