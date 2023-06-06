import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  accesos: [],
};
export const getAllAccesos = createAsyncThunk(
  "getAllAccesos/getAllAccesos",
  async () => {
    return await fetch(`http://localhost:3000/autorizacion`).then((response) =>
      response.json()
    );
  }
);

const getAccesos = createSlice({
  name: "accesos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllAccesos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllAccesos.fulfilled, (state, action) => {
      state.accesos = action.payload;
    });
    builder.addCase(getAllAccesos.rejected, (state, action) => {
      state.accesos = [];
    });
  },
});

// Action creators are generated for each case reducer function
export default getAccesos.reducer;