import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrCiudadRoutingModule } from './pr-ciudad-routing.module';
import { PrCiudadComponent } from './pr-ciudad.component';


@NgModule({
  declarations: [
    PrCiudadComponent
  ],
  imports: [
    CommonModule,
    PrCiudadRoutingModule
  ]
})
export class PrCiudadModule { }
