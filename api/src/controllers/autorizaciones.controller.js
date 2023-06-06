import { Autorizacion } from "../models/Autorizacion.js";
import { Empleado } from "../models/Empleado.js";
// import { Empleado } from "../models/Empleado.js";
// import {verificarCoherenciaMovimientos} from "./validacion.js";

export const postMovimientos = async(req, res) => {

    try {
        const { numeroDocumento, sentido, horario } = req.body;

        if(!numeroDocumento || !sentido ) {
          return res.status(400).json({message: 'Faltan parametros'});
        }

        if(sentido !== 'ingreso' && sentido !== 'salida'){
            return res.status(400).json({message: 'Sentido Invalido'});
        }

        // codigo para verificar si el empleado esta autorizado a entrar 

        const empleadoAutorizado = await Empleado.findOne({
            where:{
                numeroDocumento,
                autorizacion: true
            }
        });

        if(!empleadoAutorizado){
            return res.status(400).json({message: 'No esta autorizado para ingresar'});
        }

        // -------------------------------------------------------------------



        const ultimoMovimiento = await Autorizacion.findOne({
            where:{
                numeroDocumento
            },
            order: [['horario', 'DESC']],
        });
        
        if(ultimoMovimiento){
            if(ultimoMovimiento.sentido === 'ingreso') {
                if(sentido !== 'salida') {
                    return res.status(400).json({message: 'Debe registrar una salida después de un ingreso' })
                }
            } else {
                if( sentido !== 'ingreso') {
                    return res.status(400).json({ message: 'Debe registrar un ingreso antes de una salida' });
                }
            }
        } else {
            if(sentido !== 'ingreso') {
                return res.status(400).json({ message: 'Debe registrar un ingreso primero' });
            }
        }
            
        const currentDateTime = new Date();
        // Crea el movimiento en la base de datos utilizando el modelo de Sequelize
        const movimiento = await Autorizacion.create({
          numeroDocumento,
          sentido,
          horario: currentDateTime
        });
    
        res.status(201).json(movimiento);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el movimiento' });
      }
}

export const getMovimientos  = async( req, res) => {

    try {
        const movimientos = await Autorizacion.findAll();
        res.json(movimientos)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};




