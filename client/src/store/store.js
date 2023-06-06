import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getEmpleados from "./slices/getEmpleados";
import getAccesos from "./slices/getAccesos";
import erroresFormEmpleado from "./slices/erroresFormEmpleado";
import erroresFormAutorizacion from "./slices/erroresFormAutorizacion";


const rootReducer = combineReducers({
  empleados: getEmpleados,
  accesos: getAccesos,
  errores: erroresFormEmpleado,
  erroresAuto: erroresFormAutorizacion
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});