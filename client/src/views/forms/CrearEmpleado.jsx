import React, { useEffect, useState } from "react";
import { Field, Formik } from "formik";
import { crearEmpleado } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmpleados } from "../../store/slices/getEmpleados";
import { errorRemove } from "../../store/slices/erroresFormEmpleado";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export const CrearEmpleado = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [autorizado, setAutorizado] = useState("");
  const errorAuth = useSelector((state) => state.errores.errorAuth);

  console.log("error en crear empleado", errorAuth.message);
  const dispatch = useDispatch();
  const navigate =useNavigate()

  useEffect(() => {
    dispatch(getAllEmpleados());
  }, []);

  useEffect(() => {
    dispatch(errorRemove());

    if (errorAuth.length === 0) {
      return;
    } else {
      swal({
        title: "Error!",
        text: errorAuth.message,
        icon: "error",
        button: "ok",
      });
    }
    /* } */
  }, [errorAuth]);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellidos: "",
          tipoDocumento: "",
          numeroDocumento: "",
          autorizacion: "",
        }}
       
        onSubmit={(valores, { resetForm }) => {
          dispatch(crearEmpleado(valores));
          swal({
            title: "Done!",
            text: "empleado creado!",
            icon: "success",
          });
          navigate("/admin");
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cedula">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            

              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Apellidos"
                value={values.apellidos}
                onChange={handleChange}
                onBlur={handleBlur}
              />
             
              <label htmlFor="tipoDocumento">Tipo Documento</label>
              <input
                type="text"
                id="tipoDocumento"
                name="tipoDocumento"
                placeholder="Tipo Documento"
                value={values.tipoDocumento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            

              <label htmlFor="cedula">Numero Documento</label>
              <input
                type="text"
                id="numeroDocumento"
                name="numeroDocumento"
                placeholder="Numero Documento"
                value={values.numeroDocumento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
             

              {/* <label htmlFor='cedula'>Horario Ingreso</label>
                <input 
                type='text' 
                id='horarioIngreso' 
                name='horarioIngreso' 
                placeholder='Horario ingreso' 
                value={values.horarioIngreso}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                { touched.horarioIngreso && errors.horarioIngreso && <div className='error'>{errors.horarioIngreso}</div>}

                <label htmlFor='cedula'>Horario Salida</label>
                <input 
                type='text' 
                id='horarioSalida' 
                name='horarioSalida' 
                placeholder='Horario salida' 
                value={values.horarioSalida}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                { touched.horarioSalida && errors.horarioSalida && <div className='error'>{errors.horarioSalida}</div>} */}

              <div>
                <label>
                  <Field type="radio" name="autorizacion" value="true" />
                  Activo
                </label>
                <label>
                  <Field type="radio" name="autorizacion" value="false" />
                  Inactivo
                </label>
                
              </div>
            </div>
            <button type="submit">Crear Empleado</button>
            {formularioEnviado && <p>Empleado Creado</p>}
          </form>
        )}
      </Formik>
    </>
  );
};