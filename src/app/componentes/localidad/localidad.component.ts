import { Localidad } from './../../modelos/localidad';
import { LocalidadesService } from './../../servicios/localidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {

  constructor(private servicio : LocalidadesService) { }

  public localidades: Localidad[];

  ngOnInit(): void {
    this.mostrarLocalidades();
  }

  mostrarLocalidades() {
    this.servicio.getAllLocalidades().subscribe((data) => {
      this.localidades = data;
      console.log(this.localidades);
    })
  }

}
