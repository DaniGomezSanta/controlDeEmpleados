import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../views/forms/RegisterPage';
import { CrearEmpleado } from '../views/forms/CrearEmpleado';
import { TablaEmpleados } from '../views/tablas/tablaEmpleados';
import { TablaAccesos } from '../views/tablas/tablaAccesos';


export const AppRouter = () => {
  return (
    <Routes>
        {/* panel admin */}
        <Route path='/crearEmpleado' element={<CrearEmpleado/>}/>
        {/* registro de ingreso y salida */}
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/admin' element={<TablaEmpleados/>}/>
        <Route path='/accesos' element={<TablaAccesos/>}/>
    </Routes>
  )
}
