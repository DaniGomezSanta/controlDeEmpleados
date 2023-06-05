import React, { useState } from 'react'; 
import { Field, Formik } from "formik";
import Clock from '../../controlAcceso/components/views/reloj';
// import { registroDeAcceso } from '../../store/slices/registro';
import { registroAcceso } from '../../store/actions';
import { useDispatch } from 'react-redux';


export const RegisterPage = () => {

  const [formularioEnviado, setFormularioEnviado] = useState(false)
  const [sentidoSeleccionado, setSentidoSeleccionado] = useState('');

  const dispatch = useDispatch();

  return (
    <>
    <Clock/>
    <Formik

    initialValues={{
      cedula: '',
      sentido: ''
    }}

    validate={(valores)=> {
      let errores ={};
      if(!valores.numeroDocumento){errores.numeroDocumento = 'Porfavor ingresa documento de indentidad'
      }else if(!/^[0-9]+$/.test(valores.numeroDocumento)) {errores.numeroDocumento = 'Solo numeros'}
      if (!valores.sentido) {errores.sentido = 'Por favor selecciona el sentido (ingreso o salida)'}
      return errores
    }}
     onSubmit={(valores, {resetForm})=> {
      dispatch(registroAcceso(valores))
      resetForm(); 
      setFormularioEnviado(true)
      setTimeout(()=> setFormularioEnviado(false), 5000);
      setSentidoSeleccionado(valores.sentido);
      console.log('Formulario enviado')
     }}>
          {( {values, errors, touched, handleSubmit, handleChange, handleBlur} )=> (
            <form className='formulario' onSubmit={handleSubmit}>
            
              <div>
                <label htmlFor='numeroDocumento'>Cedula</label>
                <input 
                type='text' 
                id='numeroDocumento' 
                name='numeroDocumento' 
                placeholder='Cedula' 
                value={values.numeroDocumento}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                { touched.numeroDocumento && errors.numeroDocumento && <div className='error'>{errors.numeroDocumento}</div>}
              </div>
              <div>
                <label>
                    <Field type= 'radio' name='sentido' value='ingreso'/>Ingreso
                </label>
                <label>
                    <Field type= 'radio' name='sentido' value='salida'/>Salida
                </label>
                { touched.sentido && errors.sentido && <div className='error'>{errors.sentido}</div>}
             </div> 
             <div>
              <button type='submit'>Registrar</button>
              {formularioEnviado && (
                <p>
                  {sentidoSeleccionado === "ingreso"
                    ? "Ingreso Registrado"
                    : sentidoSeleccionado === "salida"
                    ? "Salida Registrada"
                    : ""}
               </p>
              )}
             </div>
            </form> 
          )}

        </Formik>
    </>
  )
}
