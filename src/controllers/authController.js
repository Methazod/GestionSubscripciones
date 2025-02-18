import Usuario from "../models/usuarioModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const secretKey = "secret";

/**
 * Controlador de la autentificacion.
 * 
 * @author Jorge Manzano Anchelergues y Jaime Usero Aranda
 */

/**
 * Metodo que registra un usuario
 * 
 * @param {*} req nombre y contraseña
 * @param {*} res el usuario creado
 * @returns el usuario
 */
export const Registro = async(req, res) => {
    const { nombre, password } = req.body;
    try {
        const usuario = await Usuario.create({
            nombre: nombre,
            password: await bcrypt.hash(password, 10)
        });
        return res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Metodo que logea un usuario
 * 
 * @param {*} req nombre y contraseña
 * @param {*} res jwt
 * @returns jwt creado
 */
export const Login = async(req, res) => {
    const { nombre, password } = req.body;
    if(!nombre || !password) return res.status(400).json({ message: "El nombre y la contraseña son requeridos" });
    try {
        const usuario = await Usuario.findOne({ where: { nombre: nombre } });
        if (!usuario || !(await bcrypt.compare(password, usuario.password))) return res.status(401).json({ message: "Introduciste mal el usuario o la contraseña" });
        return res.status(200).json(jwt.sign({ nombre }, secretKey, { expiresIn: "1h" }));        
    } catch (error) {
        console.log(error);
    }
}