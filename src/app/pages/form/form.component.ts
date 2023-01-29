import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/core/service/form.service';
import { Problemas } from 'src/app/models/problemas';
import { Causa } from 'src/app/models/causa';

@Component({
  selector: 'app-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  problema: Problemas[] | undefined;

  causa: Causa[] | undefined;

  Formulario: FormGroup;

  constructor(private fb: FormBuilder ,private firestore: Firestore, private formService: FormService){
    this.Formulario = new FormGroup({

    })
    
  }

  ngOnInit(): void {

    this.getAllProblemas();
    this.getAllCausas();
    
  }

  getAllProblemas(){
    this.formService.getProblemas().subscribe((res:Problemas[]) => {
      this.problema = res
    })
    
  }

  getAllCausas(){
    this.formService.getCausas().subscribe((res: Causa[])=> {
      this.causa = res
    })
  }

}
