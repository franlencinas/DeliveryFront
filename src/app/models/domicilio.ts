import { Localidad } from './localidad';

export interface Domicilio{
    id_domicilio : number,
    calle_domicilio : string,
    numero_domicilio : number,
    departamento_domicilio : string,
    piso_domicilio : number,
    id_localidad_domicilio : Localidad
}