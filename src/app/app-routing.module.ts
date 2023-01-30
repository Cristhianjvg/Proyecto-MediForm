import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
  { path: 'pr-ciudad', loadChildren: () => import('./pages/pr-ciudad/pr-ciudad.module').then(m => m.PrCiudadModule) },
  { path: 'hospital', loadChildren: () => import('./pages/hospital/hospital.module').then(m => m.HospitalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
