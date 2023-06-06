import axios from "axios";
import { setErrorAuth } from "../slices/erroresFormEmpleado";



export const accesoRegistro = (data) => async () => {
    await axios({
      method: "POST",
      url: `http://localhost:3000/autorizacion`,
      data: data,
    });
  };


  export const crearEmpleado = (data) => {
    return function (dispatch) {
      return axios({
        method: "POST",
        url: `http://localhost:3000/empleados`,
        data: data,
      })
        .then((response) => console.log(response))
        .catch((error) => {
          console.log("MENSAJES DE ERROR", error.response.data);
          const errorMessage = error.response.data;
          return dispatch(setErrorAuth(errorMessage));
        });
    };
  }; 