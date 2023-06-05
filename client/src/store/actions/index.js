import axios from "axios";



export const accesoRegistro = (data) => async () => {
    await axios({
      method: "POST",
      url: `http://localhost:3000/autorizacion`,
      data: data,
    });
  };