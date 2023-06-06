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
  const [loading, setLoading] = useState(false); 
  const [image, setImage] = useState("");

  console.log("error en crear empleado", errorAuth.message);
  const dispatch = useDispatch();

  const uploadImage = async (e) => {
    const files = e.target.files;
    console.log("FILES", files);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyfjoi0td/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };


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
    <div >
    <NavBar/>
      <Formik
        initialValues={{
          nombre: "",
          apellidos: "",
          tipoDocumento: "",
          numeroDocumento: "",
          autorizacion: "",
          image:"",
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
          <div className="container mt-4">
            <div className="row justify-content-center">
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

                      <p hidden>{(values.image = image)}</p>
                        <label>Foto:</label>
                        <input
                          className="form-control"
                          type="file"
                          id="image"
                          name="image"
                          onChange={uploadImage}
                          onBlur={handleBlur}
                        />
                        {loading ? (
                          <img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" />
                        ) : (
                          <img src={image} width="230px"
                          className="mt-3" />
                        )}
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
    </div>
  );
};