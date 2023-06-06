import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import Clock from "../../controlAcceso/components/views/reloj";
import { useDispatch, useSelector } from "react-redux";
import { accesoRegistro } from "../../store/actions/index";
import { getAllEmpleados } from "../../store/slices/getEmpleados";
import { getAllAccesos } from "../../store/slices/getAccesos";
import { errorRemoveAuto } from "../../store/slices/erroresFormAutorizacion";
import { NavBar } from "../../features/NavBar";


export const RegisterPage = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [sentidoSeleccionado, setSentidoSeleccionado] = useState("");

  const errorAuth = useSelector((state) => state.erroresAuto.errorFormAuto);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmpleados());
  }, []);

  useEffect(() => {
    dispatch(getAllAccesos());
  }, []);

  useEffect(() => {
    dispatch(errorRemoveAuto());

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
          numeroDocumento: "",
          sentido: "",
          horario: "",
        }}
       
        onSubmit={(valores, { resetForm }) => {
          dispatch(accesoRegistro(valores));
          swal({
            title: "Done!",
            text: "Registrado!",
            icon: "success",
          });
          navigate("/accesos");
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
          
          <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-dark-subtle" >
              <div className="40-w p-5 rounded bg-white">
                <Form className="formulario" onSubmit={handleSubmit}>
                  <h3 className="fw-bold text-center">Registro de Accesos</h3>
                  <div className="mb-2">
                    <label htmlFor="numeroDocumento" className="form-label">Cedula</label>
                    <Field
                      className='form-control'
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
                  <div className="mb-4 form-check" >
                    <label className="form-check-label">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="sentido"
                        value="ingreso"
                        checked={values.sentido === "ingreso"}
                        />
                      Ingreso
                    </label >
                    </div>
                    <div className="mb-4 form-check" >
                    <label className="form-check-label">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="sentido"
                        value="salida"
                        checked={values.sentido === "salida"}
                        />
                      Salida
                    </label>
                    {touched.sentido && errors.sentido && (
                      <div className="error">{errors.sentido}</div>
                      )}
                  </div>
                  <div className="d-grid">
                    <button type="submit" class="btn btn-success">Registrar</button>
                    {formularioEnviado && (
                      <p>
                        {sentidoSeleccionado === "ingreso"
                          ? "Ingreso Registrado"
                          : sentidoSeleccionado === "salida"
                          ? "Salida Registrada"
                          : ""}
                      </p>
                    )}
                    <Clock/>
                  </div>
                </Form>
              </div>            
          </div>
        )}
      </Formik>
    </>
  );
};