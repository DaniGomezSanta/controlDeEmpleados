import { createSlice } from "@reduxjs/toolkit";

const erroresFormEmpleado = createSlice({
  name: "errores",
  initialState: {
    errorAuth: "",
  },

  reducers: {
    setErrorAuth: (state, action) => {
      // console.log("errores en auth", state.errorAuth);
      state.errorAuth = action.payload;
    },

    errorRemove: (state, action) => {
      state.errorAuth = "";
    },
  },
});

export const { setErrorAuth, errorRemove } = erroresFormEmpleado.actions;
export default erroresFormEmpleado.reducer;