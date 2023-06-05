import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  empleados: [],
};
export const getAllEmpleados = createAsyncThunk(
  "getAllEmpleados/getAllEmpleados",
  async () => {
    return await fetch(`http://localhost:3000/empleados`).then((response) =>
      response.json()
    );
  }
);

const getEmpleados = createSlice({
  name: "empleados",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllEmpleados.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllEmpleados.fulfilled, (state, action) => {
      state.empleados = action.payload;
    });
    builder.addCase(getAllEmpleados.rejected, (state, action) => {
      state.empleados = [];
    });
  },
});

// Action creators are generated for each case reducer function
export default getEmpleados.reducer;