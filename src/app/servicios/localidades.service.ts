import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidad } from '../modelos/localidad';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  // Constructor
  constructor(private conexion: HttpClient) { }

  private urlLocalidades = 'http://localhost:9000/api/v1/localidad/';

  getAllLocalidades(): Observable<Localidad[]> {
    return this.conexion.get<Localidad[]>(this.urlLocalidades);
  }
}
