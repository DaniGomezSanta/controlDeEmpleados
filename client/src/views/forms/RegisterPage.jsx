import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Clock from '../../controlAcceso/components/views/reloj';
import { useDispatch } from 'react-redux';
import {accesoRegistro} from '../../store/actions/index'
import { getAllEmpleados } from '../../store/slices/getEmpleados';
import { getAllAccesos } from '../../store/slices/getAccesos';
import { NavBar } from '../../features/NavBar';


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
      <NavBar/>
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
            <div className="form-floating mb-3">
              <label htmlFor="numeroDocumento"  for="floatingInput"></label>
              <Field
                className='class="form-control"'
                type="text"
                id="numeroDocumento"
                name="numeroDocumento"
                placeholder="Cedula"
                value={values.numeroDocumento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.numeroDocumento && errors.numeroDocumento && (
                <div className="--bs-danger">{errors.numeroDocumento}</div>
              )}
            </div>
            <div className="form-check">
              <label className="form-check-label" for="flexRadioDefault1">
                <Field type="radio" name="sentido" value="ingreso" checked={values.sentido === 'ingreso'} />
                Ingreso
              </label>
              <label className="form-check-label">
                <Field type="radio" name="sentido" value="salida" checked={values.sentido === 'salida'} />
                Salida
              </label>
              {touched.sentido && errors.sentido && <div className="--bs-danger">{errors.sentido}</div>}
            </div>
            <div>
              <button type="submit" className="btn btn-outline-success">Registrar</button>
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
