import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
}
