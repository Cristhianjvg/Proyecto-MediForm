import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/core/service/hospital.service';
import { Hospital } from 'src/app/models/hospital';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit{

  hospitales: Hospital[] | undefined;

  constructor(private hospitalService: HospitalService){
    
  }

  ngOnInit(){

    this.getAllHospitales();
  }


  getAllHospitales(){
    this.hospitalService.getHospital().subscribe((res:Hospital[]) => {
      this.hospitales = res
      console.log(res)
    })
    
  }

}
