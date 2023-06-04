import {Router} from 'express';
import { crearEmpleado, deleteEmpleado, getEmpleado, getEmpleados, updateEmpleado } from '../controllers/empleados.controller.js';

const router = Router();


router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleado)
router.post('/empleados', crearEmpleado)
router.put('/empleados/:id', updateEmpleado )
router.delete('/empleados/:id', deleteEmpleado)


export default router; 
