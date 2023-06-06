import { createSlice } from "@reduxjs/toolkit";

const erroresFormAutorizacion = createSlice({
  name: "erroresAuto",
  initialState: {
    errorFormAuto: "",
  },

  reducers: {
    setErrorAutorizacion: (state, action) => {
      // console.log("errores en auth", state.errorAuth);
      state.errorFormAuto = action.payload;
    },

    errorRemoveAuto: (state, action) => {
      state.errorFormAuto = "";
    },
  },
});

export const { setErrorAutorizacion, errorRemoveAuto } =
  erroresFormAutorizacion.actions;
export default erroresFormAutorizacion.reducer;