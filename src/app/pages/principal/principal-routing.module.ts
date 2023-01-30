import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from '../form/form.component';


const routes: Routes = [{ path: '', component: FormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,SharedModule]
})
export class PrincipalRoutingModule { }