import {Router} from 'express';
import { postMovimientos, getMovimientos } from '../controllers/autorizaciones.controller.js';


const router = Router();

router.post('/autorizacion', postMovimientos);
router.get('/autorizacion', getMovimientos);
// router.post('/autorizacion/salida', autorizacionSalida); 


export default router;   