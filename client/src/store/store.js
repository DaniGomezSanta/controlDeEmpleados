import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getEmpleados from "./slices/getEmpleados";
import getAccesos from "./slices/getAccesos";


const rootReducer = combineReducers({
  empleados: getEmpleados,
  accesos: getAccesos
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});