import { DataTypes }  from 'sequelize';
import { sequelize }  from '../database/database.js'
import { Autorizacion } from './Autorizacion.js';

export const Empleado = sequelize.define('empleado', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     // primaryKey: true,
    //     autoIncrement: true
    // },
    nombre: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    tipoDocumento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroDocumento: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    autorizacion: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
});

Empleado.hasMany(Autorizacion, { foreignKey: 'numeroDocumento' });

 
