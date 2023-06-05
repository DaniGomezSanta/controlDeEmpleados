import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
  registros: {},
  loading: false,
  error: null
};

export const registroDeAcceso = createAsyncThunk(
  'registroDeAcceso/registroDeAcceso',
  async (registro) => {
    return await axios.post('http://localhost:3000/autorizacion', registro)
    .then((respuesta) => respuesta.data)
  }
)

const registroAcceso = createSlice({
  name: 'registros',
  initialState,
    extraReducers: (builder) => {
      builder.addCase(registroDeAcceso.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(registroDeAcceso.fulfilled, (state, action) => {
        state.loading = false;
        state.registros[action.payload.id] = action.payload;
      });
      builder.addCase(registroDeAcceso.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    }
})

export default registroAcceso.reducer;