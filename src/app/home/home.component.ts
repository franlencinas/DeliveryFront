import { Component, OnInit } from '@angular/core';
import { Localidad } from '../models/localidad';
import { ApiServiceService } from './../auth/apiService/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public localidades: Localidad[];
  public localidadSeleccionada: string;
  constructor(private apiS: ApiServiceService) {this.localidades = []}

  ngOnInit(): void {
    this.obtenerAllLocalidades();
    // console.log(this.apiS.getAllRoles());
    // console.log(this.apiS.getPermisoRol('franlencinasabdo@gmail.com'));
  }
  obtenerAllLocalidades() {
    this.apiS.getAllLocalidades().subscribe(data => {
      this.localidades = data;
    }, error => {
      alert('Error al cargar localidades' + error);
    });
  }
}
