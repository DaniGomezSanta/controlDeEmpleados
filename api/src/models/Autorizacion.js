import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';

export const Autorizacion = sequelize.define('autorizacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    sentido: {
        type: DataTypes.ENUM('ingreso', 'salida'),
        allowNull: false,
    },
    horario: {
        type: DataTypes.DATE,
        allowNull: false  
    },
});






