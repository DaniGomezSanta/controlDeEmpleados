import React, { useState } from 'react'; 
import { Formik } from "formik";


export const RegisterPage = () => {

  const [formularioEnviado, setFormularioEnviado] = useState(false)
  return (
    <>
    <Formik

    initialValues={{
      cedula: ''
    }}

    validate={(valores)=> {
      let errores ={};
      if(!valores.cedula){
        errores.cedula = 'Porfavor ingresa la cedula'
      }else if(!/^[0-9]+$/.test(valores.cedula)) {
        errores.cedula = 'Solo numeros'
      }
      return errores
    }}
     onSubmit={(valores, {resetForm})=> {
      resetForm(); 
      setFormularioEnviado(true)
      console.log('Formulario enviado')
     }}>
          {( {values, errors, touched, handleSubmit, handleChange, handleBlur} )=> (
            <form className='formulario' onSubmit={handleSubmit}>
            
              <div>
                <label htmlFor='cedula'>Cedula</label>
                <input 
                type='text' 
                id='cedula' 
                name='cedula' 
                placeholder='Cedula' 
                value={values.cedula}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                { touched.cedula && errors.cedula && <div className='error'>{errors.cedula}</div>}
              </div>
              <button type='submit'>Ingreso</button>
              { formularioEnviado && <p>Ingreso Registrado</p>}
              <button type='submit'>Salida</button>
              { formularioEnviado && <p>Salida Registrada</p>}
            </form> 
          )}

        </Formik>
    </>
  )
}
