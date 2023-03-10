import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { CiudadService } from 'src/app/core/service/ciudad.service';
import { Ciudad } from 'src/app/models/ciudad';
import { ProvinciaService } from 'src/app/core/service/provincia.service';
import { Provincias } from 'src/app/models/provincias';
import { HospitalService } from 'src/app/core/service/hospital.service';
import { Hospital } from 'src/app/models/hospital';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-pr-ciudad',
  templateUrl: './pr-ciudad.component.html',
  styleUrls: ['./pr-ciudad.component.scss']
})
export class PrCiudadComponent implements OnInit {

  forms: FormGroup;

  ciudad: Ciudad[] = [];
  provincia: Provincias[] | undefined;
  hospitales: Hospital[] | undefined;
  id:any;

  constructor(private ciudadService: CiudadService, private provinciaService : ProvinciaService,
    private hospitalService: HospitalService, private fb: FormBuilder){
      this.forms = this.fb.group({
        NombreCiudad: ['', Validators.required],
        NombreProvincia: ['', Validators.required],
        NombreHospital: ['', Validators.required]
      })

  }
  //@Input() ciudad$: Observable<Ciudad[]>;
  //@Output() pokemonEmitter = new EventEmitter<Pokemon>();

  ngOnInit(): void {
    this.getAllCiudades();
    
    this.getAllProvincias();

    this.getAllHospitales();

    this.getId();
  }

  getAllCiudades(){
    this.ciudadService.getCiudad().subscribe((res:Ciudad[]) => {
      this.ciudad = res
      console.log(res)
    })
    
  }

  getId() {
    const select = document.querySelector("#NombreProvincia") as HTMLSelectElement;
    select.addEventListener("change", (event: Event) => {
      const selectedOption = select.options[select.selectedIndex] as HTMLOptionElement;
      this.id = selectedOption.value;
      console.log(`Selected option ID: ${this.id}`);
    });
  }

  getAllProvincias(){
    this.provinciaService.getProvincias().subscribe((res: Provincias[])=> {
      this.provincia = res
    })
  }

  
  getAllHospitales(){
    this.hospitalService.getHospital().subscribe((res:Hospital[]) => {
      this.hospitales = res
      console.log(res)
    })
    
  }

  seleccionar(){
    console.log(this.forms)
  }

}
