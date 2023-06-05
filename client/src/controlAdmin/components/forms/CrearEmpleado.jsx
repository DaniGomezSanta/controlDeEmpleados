import React, { useState } from 'react'; 
import { Field, Formik } from "formik";


export const CrearEmpleado = () => {

  const [formularioEnviado, setFormularioEnviado] = useState(false)
  return (
    <>
    <Formik

    initialValues={{
        nombre: '',
        apellidos: '',
        tipoDocumento: '',
        numeroDocumento: '',
        autorizacion: ''
    }}

    validate={(valores)=> {
      let errores ={};
      if(!valores.numeroDocumento){
        errores.numeroDocumento = 'Porfavor ingresa documento de indentidad'
      }else if(!/^[0-9]+$/.test(valores.numeroDocumento)) {
        errores.numeroDocumento = 'Solo numeros'
      }
      if(!valores.nombre){errores.nombre = 'Porfavor ingresa nombre'}
      if(!valores.apellidos){errores.apellidos = 'Porfavor ingresa apellido'}
      if(!valores.tipoDocumento){errores.tipoDocumento = 'Porfavor ingresa tipo Documento'}
      return errores
    }}
     onSubmit={(valores, {resetForm})=> {
      resetForm(); 
      setFormularioEnviado(true)
      setTimeout(()=> setFormularioEnviado(false), 5000)
      console.log('Formulario enviado')
     }}>
          {( {values, errors, touched, handleSubmit, handleChange, handleBlur} )=> (
            <form className='formulario' onSubmit={handleSubmit}>
            
              <div>
                <label htmlFor='cedula'>Nombre</label>
                <input 
                type='text' 
                id='nombre' 
                name='nombre' 
                placeholder='Nombre' 
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                { touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}

                <label htmlFor='apellidos'>Apellidos</label>
                <input 
                type='text' 
                id='apellidos' 
                name='apellidos' 
                placeholder='Apellidos' 
                value={values.apellidos}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                { touched.apellidos && errors.apellidos && <div className='error'>{errors.apellidos}</div>}

                <label htmlFor='tipoDocumento'>Tipo Documento</label>
                <input 
                type='text' 
                id='tipoDocumento' 
                name='tipoDocumento' 
                placeholder='Tipo Documento' 
                value={values.tipoDocumento}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                { touched.tipoDocumento && errors.tipoDocumento && <div className='error'>{errors.tipoDocumento}</div>}

                <label htmlFor='cedula'>Numero Documento</label>
                <input 
                type='text' 
                id='numeroDocumento' 
                name='numeroDocumento' 
                placeholder='Numero Documento' 
                value={values.numeroDocumento}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                { touched.numeroDocumento && errors.numeroDocumento && <div className='error'>{errors.numeroDocumento}</div>}

             <div>
                <label>
                    <Field type= 'radio' name='autorizacion' value='activo'/>Activo
                </label>
                <label>
                    <Field type= 'radio' name='autorizacion' value='inactivo'/>Inactivo
                </label>
             </div>
              </div>
              <button type='submit'>Crear Empleado</button>
              { formularioEnviado && <p>Empleado Creado</p>}
            </form> 
          )}

        </Formik>
    </>
  )
}
