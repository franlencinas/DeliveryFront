import { Usuario } from './usuario';

export interface pedido{
    id_pedido : number,
    fecha_pedido : Date,
    estado_pedido : string,
    hora_estimada_pedido : string,
    tipo_envio_pedido : string,
    id_usuario_pedido : Usuario
}