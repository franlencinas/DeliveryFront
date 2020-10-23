import { RubroGeneral } from '../rubroGeneral';
export interface ArticuloManufacturado {
    id_manufacturado : number,
    denominacion_manufacturado : string,
    descripcion_manufacturado : string,
    tiempo_manufacturado : number,
    precio_manufacturado : number,
    imagen_manufacturado ? : string,
    id_categoria_manufacturado : RubroGeneral
}