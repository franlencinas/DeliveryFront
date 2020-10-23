import { Usuario } from './usuario';

export interface factura{
    id_factura : number,
    fecha_factura : Date,
    descuento_factura : number,
    total_factura : number,
    forma_pago_factura : string,
    usuario_factura : Usuario
}