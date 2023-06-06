import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getEmpleados from "./slices/getEmpleados";
import getAccesos from "./slices/getAccesos";
import erroresFormEmpleado from "./slices/erroresFormEmpleado";


const rootReducer = combineReducers({
  empleados: getEmpleados,
  accesos: getAccesos,
  errores: erroresFormEmpleado,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});