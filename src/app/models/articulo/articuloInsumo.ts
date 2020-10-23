import { UnidadMedida } from '../unidadMedida';
import { RubroArticulo } from './rubroArticulo';

export interface ArticuloInsumo{
    id_articulo : number,
    nombre_articulo : string,
    precio_compra_articulo : string,
    precio_venta_articulo : string,
    stock_articulo: number,
    stock_max_articulo : number,
    stock_min_articulo : number,
    es_insumo_articulo : boolean,
    imagen_articulo : string,
    id_rubro_articulo : RubroArticulo,
    id_unidad_medida_articulo : UnidadMedida
}