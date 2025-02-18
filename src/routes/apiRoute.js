import express from "express";
import { Registro, Login } from "../controllers/authController.js";
import { AddSubscripcion, GetAllSubscripciones, UpdateSubscripcion, DeleteSubscripcion } from "../controllers/subsController.js"
import jwt from "jsonwebtoken";
const router = express.Router();
const secretKey = "secret";

/**
 * Enrutador de la API
 * 
 * @author Jorge Manzano Anchelergues y Jaime Usero Aranda
 */

router.get('/', (req, res) => {    
    res.json(
        {
            "Response": "¡Hola mundo!"
        }
    );
});

// Autentificacion
router.post('/api/auth/register', Registro);
router.post('/api/auth/login', Login);

// Gestor
router.post('/api/subscriptions', verifyToken, AddSubscripcion);
router.get('/api/subscriptions', verifyToken, GetAllSubscripciones);
router.put('/api/subscriptions/:id', verifyToken, UpdateSubscripcion);
router.delete('/api/subscriptions/:id', verifyToken, DeleteSubscripcion);

/**
 * Verifica el token
 */
function verifyToken(req, res, next) {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token not provied" });
    }
    try {
        const payload = jwt.verify(token, secretKey);
        req.username = payload.username;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token not valid" });
    }
}

export default router;