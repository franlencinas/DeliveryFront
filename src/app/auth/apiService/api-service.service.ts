import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localidad } from 'src/app/models/localidad';
import { Usuario } from 'src/app/models/usuario';
import { Rol } from 'src/app/models/rol';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  private _urlLocalidad = 'http://localhost:9000/api/v1/localidad/';
  private _urlUsuarios  = 'http://localhost:9000/usuarios';
  private _urlRol       = 'http://localhost:9000/rols';

  getAllLocalidades(): Observable <Localidad[]> {
    console.log(this.http.get(this._urlLocalidad));
    console.log(this.http.get<Localidad[]>(this._urlLocalidad));
    return this.http.get<Localidad[]>(this._urlLocalidad);
  }

  getAllRoles(): Observable <Rol[]> {
    return this.http.get<Rol[]>(this._urlRol);
  }

  getPermisoRol(email: string): Observable <Rol> {
    return this.http.get<Rol>(this._urlRol + email);
  }

  setAllUsuarios(usuario: Usuario): Observable <Usuario> {
    return this.http.post<Usuario>(this._urlUsuarios, usuario);
  }
  
}
