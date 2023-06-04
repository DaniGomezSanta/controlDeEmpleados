import { Empleado } from "../models/Empleado.js";
import { Op }  from "sequelize";


export const getEmpleados = async(req, res) => {
    try {
        const empleados =  await Empleado.findAll();
        res.json(empleados)  
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getEmpleado = async(req, res) => {
    const {id} = req.params;

    try {   
        const empleado = await Empleado.findOne({
            where: {
                id
            }
        });
        if(!empleado) return res.status(404).json({message: `Empleado ${id} no existe` })
        res.json(empleado)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

};


export const crearEmpleado = async(req, res) => { 

    const {nombre, apellidos, tipoDocumento, numeroDocumento, autorizacion} = req.body

    try {

        const empleadoExiste = await Empleado.findOne({ where: { [Op.and]: [{numeroDocumento: numeroDocumento}] }});
        
        if(empleadoExiste){
            return res.status(400).json({message: 'Ya existe un empleado con ese numero de documento'})
        }else{

            const nuevoEmpelado = await Empleado.create({
                nombre,
                apellidos,
                tipoDocumento,
                numeroDocumento,
                autorizacion
            })
            res.json(nuevoEmpelado) 
        }


    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};



export const updateEmpleado =  async(req, res)=> {
    const {id} = req.params;
    const {nombre, apellidos, tipoDocumento, numeroDocumento, autorizacion} =req.body

    try {
        const empleado = await Empleado.findByPk(id)
        empleado.nombre = nombre
        empleado.apellidos = apellidos
        empleado.tipoDocumento = tipoDocumento
        empleado.numeroDocumento = numeroDocumento
        empleado.autorizacion = autorizacion
    
        await empleado.save()
        res.json(empleado)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteEmpleado =  async(req, res)=> {
    const {id} = req.params; 
    try {
        await Empleado.destroy({
            where: {
                id,
            }
        })
        return res.status(204).json({message: `usuario ${id} eliminado`}); 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};







