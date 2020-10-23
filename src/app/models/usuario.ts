import { Domicilio } from './domicilio';
import { Rol } from './rol';

export interface Usuario    {
    id_usuario :        number,
    nombre_usuario :    string,
    apellido_usuario :  string,
    email_usuario :     string,
    telefono_usuario :  number,
    dni_usuario :       number,
    password_usuario :  string,
    antiguedad_usuario :Date,
    imagen_usuario? :   string,
    sexo_usuario :      string,
    nacimiento_usuario :Date,
    id_domicilio :      Domicilio,
    id_rol :            Rol
}