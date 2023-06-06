import React, { useEffect, useState } from "react";
import { Field, Formik } from "formik";
import { crearEmpleado } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmpleados } from "../../store/slices/getEmpleados";
import { errorRemove } from "../../store/slices/erroresFormEmpleado";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "../../features/NavBar";

export const CrearEmpleado = () => {

  const errorAuth = useSelector((state) => state.errores.errorAuth);

  console.log("error en crear empleado", errorAuth.message);
  const dispatch = useDispatch();


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
    <NavBar/>
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
          resetForm();
          // navigate("/admin");
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

          <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark-subtle">
          <div className="container">
            <div className="row justify-content-center">
                  <div className="d-flex justify-content-between mb-3">
                      <Link to="/admin">
                        <button className="btn btn-primary">
                           Volver
                        </button>
                      </Link>
                    </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <form className="formulario" onSubmit={handleSubmit}>
                      <h3 className="fw-bold text-center">Crear Empleado</h3>
                      <div className="mb-2">
                        <label htmlFor="cedula" className="form-label">Nombre</label>
                        <input
                          className='form-control'
                          type="text"
                          id="nombre"
                          name="nombre"
                          placeholder="Nombre"
                          value={values.nombre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
        
                      <div className="mb-2">
                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                        <input
                          className='form-control'
                          type="text"
                          id="apellidos"
                          name="apellidos"
                          placeholder="Apellidos"
                          value={values.apellidos}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
        
                      <div className="mb-2">
                        <label htmlFor="tipoDocumento" className="form-label">Tipo Documento</label>
                        <input
                          className='form-control'
                          type="text"
                          id="tipoDocumento"
                          name="tipoDocumento"
                          placeholder="Tipo Documento"
                          value={values.tipoDocumento}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
        
                      <div className="mb-2">
                        <label htmlFor="cedula" className="form-label">Numero Documento</label>
                        <input
                          className='form-control'
                          type="text"
                          id="numeroDocumento"
                          name="numeroDocumento"
                          placeholder="Numero Documento"
                          value={values.numeroDocumento}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
        
                      <div className="mb-4 form-check">
                        <label className="form-check-label">
                          <Field className="form-check-input" type="radio" name="autorizacion" value="true" />
                          Activo
                        </label>
                      </div>
        
                      <div className="mb-4 form-check">
                        <label>
                          <Field className="form-check-input" type="radio" name="autorizacion" value="false" />
                          Inactivo
                        </label>
                      </div>
        
                      <div className="text-center">
                        <button className="btn btn-success" type="submit">Crear Empleado</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </Formik>
    </>
  );
};