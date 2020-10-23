import { ArticuloInsumo } from './articuloInsumo';
export interface ArticuloManufacturadoDetalle{
    id_detalle : number,
    cantidad_manufacturado : number,
    id_articulo : ArticuloInsumo
}