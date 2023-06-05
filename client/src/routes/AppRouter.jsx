import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../controlAcceso/forms/RegisterPage';
import { CrearEmpleado } from '../controlAdmin/components/forms/crearEmpleado';


export const AppRouter = () => {
  return (
    <Routes>
        {/* panel admin */}
        <Route path='/crearEmpleado' element={<CrearEmpleado/>}/>

        {/* registro de ingreso y salida */}
        <Route path='/*' element={<RegisterPage/>}/>
    </Routes>
  )
}
