import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrCiudadComponent } from './pr-ciudad.component';

const routes: Routes = [{ path: '', component: PrCiudadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrCiudadRoutingModule { }
