import { Sequelize } from "sequelize";
import db from "../config/database.js";

/**
 * Clase que crea un usuario
 * 
 * @author Jorge Manzano Anchelergues y Jaime Usero Aranda
 */

const { DataTypes } = Sequelize;


const Usuario = db.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING(255)
    }
},{
    freezeTableName: true,
    timestamps: false,
});

(async () => {
    await db.sync();
})();

export default Usuario;