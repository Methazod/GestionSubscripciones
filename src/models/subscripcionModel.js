import { Sequelize } from "sequelize";
import db from "../config/database.js";

/**
 * Clase que crea una subscripcion.
 * 
 * @author Jorge Manzano Anchelergues
 */

const { DataTypes } = Sequelize;


const Subscripcion = db.define('Subscripcion',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.DOUBLE
    },
    fechaRenovacion:{
        type: DataTypes.DATE
    },
    idUsuario:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Usuario",
            key: "id"
        }
    }  
},{
    freezeTableName: true,
    timestamps: false,
});

(async () => {
    await db.sync();
})();

export default Subscripcion;