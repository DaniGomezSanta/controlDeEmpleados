import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getEmpleados from "./slices/getEmpleados";
import registroAcceso from './slices/registro'

const rootReducer = combineReducers({
  empleados: getEmpleados,
  registros: registroAcceso,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});