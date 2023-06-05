import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../controlAcceso/forms/RegisterPage';


export const AppRouter = () => {
  return (
    <Routes>
        {/* panel admin */}
        {/* <Route path='/auth/*' element={<AdminRoutes/>}/> */}

        {/* registro de ingreso y salida */}
        <Route path='/*' element={<RegisterPage/>}/>
    </Routes>
  )
}
