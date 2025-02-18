import Usuario from "../models/usuarioModel.js";
import Subscripcion from "../models/subscripcionModel.js";

/**
 * Controlador de subscripciones.
 * 
 * @author Jorge Manzano Anchelergues y Jaime Usero Aranda
 */

/**
 * Metodo que devuelve todas las subscripciones
 * 
 * @param {*} req nada
 * @param {*} res las subscripciones
 */
export const GetAllSubscripciones = async(req, res) => {
    try {
        const subs = await Subscripcion.findAll({
            attributes:['nombre', 'precio', 'fechaRenovacion'],
            include: [
                {
                    model: Usuario,
                    as: 'usuario', // Alias para la relación de los enlaces de destino
                    foreignKey: 'idUsuario',
                    attributes:['nombre']
                }
            ]
        });
        return res.status(200).json(subs);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Metodo que actualiza una subscripcion
 * 
 * @param {*} req el id de la sub
 * @param {*} res los nuevos atributos
 * @returns la sub actualizada
 */
export const UpdateSubscripcion = async(req, res) => {
    const { id } = req.params;
    const { nombre, precio, fechaRenovacion } = req.body;    
    try {
        var sub = await Subscripcion.findByPk(id);        
        await sub.update({
            nombre: nombre, 
            precio: precio, 
            fechaRenovacion: fechaRenovacion            
        });
        return res.status(200).json(sub);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Metodo que añade una sub
 * 
 * @param {*} req nada
 * @param {*} res atributos
 * @returns la nueva sub
 */
export const AddSubscripcion = async(req, res) => {
    const { nombre, precio, fechaRenovacion, idUsuario } = req.body;
    try {
        const sub = await Subscripcion.create({
            nombre: nombre, 
            precio: precio, 
            fechaRenovacion: fechaRenovacion,
            idUsuario: idUsuario
        });        
        return res.status(200).json(sub);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Metodo que elimina una sub
 * 
 * @param {*} req el id de la sub a borrar
 * @param {*} res nada
 * @returns la sub borrada
 */
export const DeleteSubscripcion = async(req, res) => {
    const { id } = req.params;
    try {
        const sub = await Subscripcion.findByPk(id)        
        sub.destroy();
        return res.status(200).json(sub);
    } catch (error) {
        console.log(error);
    }
}