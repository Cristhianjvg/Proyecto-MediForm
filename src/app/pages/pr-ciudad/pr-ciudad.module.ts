import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrCiudadRoutingModule } from './pr-ciudad-routing.module';
import { PrCiudadComponent } from './pr-ciudad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/filter.pipe';


@NgModule({
  declarations: [
    PrCiudadComponent,
    
  ],
  imports: [
    CommonModule,
    PrCiudadRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class PrCiudadModule { }
