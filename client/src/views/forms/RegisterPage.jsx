import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Clock from '../../controlAcceso/components/views/reloj';
import { useDispatch } from 'react-redux';
import {accesoRegistro} from '../../store/actions/index'
import { getAllEmpleados } from '../../store/slices/getEmpleados';
import { getAllAccesos } from '../../store/slices/getAccesos';


export const RegisterPage = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [sentidoSeleccionado, setSentidoSeleccionado] = useState('');


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmpleados())
  }, [])

  useEffect(() => {
    dispatch(getAllAccesos()); 
  }, []);
  

  return (
    <>
      <Clock />
      <Formik
        initialValues={{
          numeroDocumento: '',
          sentido: '',
          horario: ''
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.numeroDocumento) {
            errores.numeroDocumento = 'Por favor ingresa documento de identidad';
          } else if (!/^[0-9]+$/.test(valores.numeroDocumento)) {
            errores.numeroDocumento = 'Solo números';
          }
          if (!valores.sentido) 
            errores.sentido = 'Por favor selecciona el sentido (ingreso o salida)';   
          return errores;
        }}


        onSubmit={(valores, { resetForm }) => {
          dispatch(accesoRegistro(valores));
          resetForm();
          setFormularioEnviado(true);
          setTimeout(() => setFormularioEnviado(false), 5000);
          setSentidoSeleccionado(valores.sentido);
          console.log('Formulario enviado');
        }}
        
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <Form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="numeroDocumento">Cedula</label>
              <Field
                type="text"
                id="numeroDocumento"
                name="numeroDocumento"
                placeholder="Cedula"
                value={values.numeroDocumento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.numeroDocumento && errors.numeroDocumento && (
                <div className="error">{errors.numeroDocumento}</div>
              )}
            </div>
            <div>
              <label>
                <Field type="radio" name="sentido" value="ingreso" checked={values.sentido === 'ingreso'} />
                Ingreso
              </label>
              <label>
                <Field type="radio" name="sentido" value="salida" checked={values.sentido === 'salida'} />
                Salida
              </label>
              {touched.sentido && errors.sentido && <div className="error">{errors.sentido}</div>}
            </div>
            <div>
              <button type="submit">Registrar</button>
              {formularioEnviado && (
                <p>
                  {sentidoSeleccionado === 'ingreso'
                    ? 'Ingreso Registrado'
                    : sentidoSeleccionado === 'salida'
                    ? 'Salida Registrada'
                    : ''}
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
