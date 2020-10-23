import { ArticuloManufacturado } from './articulo/articuloManufacturado';
import { ArticuloInsumo } from './articulo/articuloInsumo';

export interface DetallePedido {
    id_detalle_pedido : number,
    cantidad_detalle_pedido : number,
    subtotal_detalle_pedido : number,
    id_manufacturado_detalle_pedido: ArticuloManufacturado,
    id_articulo_insumo_detalle_pedido : ArticuloInsumo
}