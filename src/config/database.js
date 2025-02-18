import { Sequelize } from "sequelize";

// npm install sequelize
// npm install mysql2

                       // Nombre base, usuario, contraseña
const db = new Sequelize('gestorsubscripciones', 'root', 'root', {
    host: "localhost",
    port: "3305",
    dialect: "mysql"    
});

export default db;