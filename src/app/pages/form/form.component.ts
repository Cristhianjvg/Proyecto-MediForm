import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/core/service/form.service';
import { Problemas } from 'src/app/models/problemas';
import { Causa } from 'src/app/models/causa';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FilterPipe } from 'src/app/filter.pipe';

@Component({
  selector: 'app-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  problema: Problemas[] = [];

  causa: Causa[] = [];

  Formulario: FormGroup;

  accionLista: any = [];

  id: any;

  variable1 = 0;
  variable2 = 0;
  total =0;

  constructor(private fb: FormBuilder, private firestore: Firestore, private formService: FormService, private router: Router,
    private route: ActivatedRoute,) {
    this.Formulario = new FormGroup({

    })

  }

  ngOnInit(): void {
    this.getAllProblemas();
    this.getAllCausas();
    this.getId();
    this.getVariableUno();
    this.getVariableDos();
    this.getIndicador();
  }

  getAllProblemas() {
    this.formService.getProblemas().subscribe((res: Problemas[]) => {
      this.problema = res
      //console.log(this.problema);
      this.accionLista = this.problema[0].accion;
    })

  }

  getAllCausas() {
    this.formService.getCausas().subscribe((res: Causa[]) => {
      this.causa = res
    })
  }

  getId() {
    const select = document.querySelector("#id") as HTMLSelectElement;
    select.addEventListener("change", (event: Event) => {
      const selectedOption = select.options[select.selectedIndex] as HTMLOptionElement;
      this.id = selectedOption.value;
      console.log(`Selected option ID: ${this.id}`);
    });
  }

  getIndicador() {
    this.total = (this.variable1/this.variable2)*100;
    console.log(this.total);
  }

  getVariableUno() {
    const form = document.querySelector("form") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("#number1") as HTMLInputElement;
      const value = parseFloat(input.value);
      this.variable1 = value;
      console.log(this.variable1);
    });
  }

  getVariableDos() {
    const form = document.querySelector("form") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("#number2") as HTMLInputElement;
      const value = parseFloat(input.value);
      this.variable2 = value;
      console.log(this.variable2);
    });
  }
}
