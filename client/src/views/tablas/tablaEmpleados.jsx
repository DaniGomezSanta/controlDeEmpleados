import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllEmpleados } from "../../store/slices/getEmpleados";
import { Link } from "react-router-dom";

export function TablaEmpleados() {
  const dispatch = useDispatch();

  const { empleados } = useSelector((state) => state.empleados);
  console.log(empleados);

  useEffect(() => {
    dispatch(getAllEmpleados());
  }, []);

  return (
    <div>
        <Link to='/crearEmpleado'>
            <button type="button" class="btn btn-success">
                Agregar empleado +
            </button>
        </Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Tipo de documento</th>
            <th scope="col">Numero de documento</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Autorizacion</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {Array.isArray(empleados)
            ? empleados.map((element, index) => {
                return (
                  <tr key={element.id}> 
                    <td>{element.tipoDocumento}</td>
                    <td>{element.numeroDocumento}</td>
                    <td>{element.nombre}</td>
                    <td>{element.apellidos}</td>
                    <td>
                      {element.autorizacion
                        ? "Esta autorizado"
                        : "No esta autorizado"}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}