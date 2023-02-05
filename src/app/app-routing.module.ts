import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  /*{
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then(m=>m.LoginModule)
  },*/
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },


  { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
  { path: 'pr-ciudad', loadChildren: () => import('./pages/pr-ciudad/pr-ciudad.module').then(m => m.PrCiudadModule) },
  { path: 'hospital', loadChildren: () => import('./pages/hospital/hospital.module').then(m => m.HospitalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,SharedModule]
})
export class AppRoutingModule { }
