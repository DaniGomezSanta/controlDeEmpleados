import express from 'express'; 
import empleadosRoutes from './routes/empleado.routes.js';
import autorizacionesRoutes from './routes/autorizaciones.routes.js'

const app = express(); 

// middlewares
app.use(express.json());

app.use(empleadosRoutes);
app.use(autorizacionesRoutes);  

export default app; 