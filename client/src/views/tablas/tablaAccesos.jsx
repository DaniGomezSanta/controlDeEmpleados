import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAccesos } from "../../store/slices/getAccesos";
import { getAllEmpleados } from "../../store/slices/getEmpleados";


export function TablaAccesos() {

  const dispatch = useDispatch();


  const { accesos } = useSelector((state) => state.accesos);
  const { empleados } = useSelector((state) => state.empleados);
  console.log(accesos);

  useEffect(() => {
    dispatch(getAllAccesos()); 
  }, []);



  const formatTime = (timeString) => {
    const time = new Date(timeString);
    return time.toLocaleTimeString([], { hour12: false });
  };

  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleDateString([], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Numero Documento</th>
            <th scope="col">Fecha</th>
            <th scope="col">Ingreso</th>
            <th scope="col">Salida</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          
          {Array.isArray(accesos) ? (
            accesos.map((element, index) => {
              return (
                <tr key={element.id}>
                  <td>{element.numeroDocumento}</td>
                  <td>{formatDate(element.horario)}</td>

                  {element.sentido === 'ingreso' ? (
                    <>
                      <td>{formatTime(element.horario)}</td>
                      <td>-</td>
                    </>
                  ) : (
                    <>
                      <td>-</td>
                      <td>{formatTime(element.horario)}</td>
                    </>
                  )}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3">No hay accesos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}