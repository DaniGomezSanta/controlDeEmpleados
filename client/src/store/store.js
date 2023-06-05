import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getEmpleados from "./slices/getEmpleados";


const rootReducer = combineReducers({
  empleados: getEmpleados,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});