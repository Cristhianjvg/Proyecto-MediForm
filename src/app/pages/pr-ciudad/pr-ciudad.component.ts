import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { CiudadService } from 'src/app/core/service/ciudad.service';
import { Ciudad } from 'src/app/models/ciudad';
import { ProvinciaService } from 'src/app/core/service/provincia.service';
import { Provincias } from 'src/app/models/provincias';
import { HospitalService } from 'src/app/core/service/hospital.service';
import { Hospital } from 'src/app/models/hospital';


@Component({
  selector: 'app-pr-ciudad',
  templateUrl: './pr-ciudad.component.html',
  styleUrls: ['./pr-ciudad.component.scss']
})
export class PrCiudadComponent implements OnInit {

  ciudad: Ciudad[] | undefined;
  provincia: Provincias[] | undefined;
  hospitales: Hospital[] | undefined;

  constructor(private ciudadService: CiudadService, private provinciaService : ProvinciaService,
    private hospitalService: HospitalService){

  }
  //@Input() ciudad$: Observable<Ciudad[]>;
  //@Output() pokemonEmitter = new EventEmitter<Pokemon>();

  ngOnInit(): void {
    this.getAllCiudades();
    
    this.getAllProvincias();

    this.getAllHospitales();
  }

  getAllCiudades(){
    this.ciudadService.getCiudad().subscribe((res:Ciudad[]) => {
      this.ciudad = res
      console.log(res)
    })
    
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

}
