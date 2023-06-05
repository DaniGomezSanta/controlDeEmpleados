import express from "express";
import empleadosRoutes from "./routes/empleado.routes.js";
import autorizacionesRoutes from "./routes/autorizaciones.routes.js";

const app = express();

// Middlewares
app.use(express.json());

// Configuración de las solicitudes CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Permitir los métodos HTTP especificados
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Permitir los encabezados especificados
  next();
});

// Rutas
app.use(empleadosRoutes);
app.use(autorizacionesRoutes);

export default app;