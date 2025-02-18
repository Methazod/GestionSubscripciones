import Subscripcion from "./subscripcionModel.js";
import Usuario from "./usuarioModel.js";

/**
 * Clase que declara las relaciones entre usuario y subscripcion
 * 
 * @author Jorge Manzano Anchelergues y Jaime Usero Aranda
 */

Usuario.hasMany(Subscripcion, {foreignKey: "idUsuario", as: "subscripciones"});
Subscripcion.belongsTo(Usuario, {foreignKey: "idUsuario", as: "usuario"});