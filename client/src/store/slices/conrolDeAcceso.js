import { createSlice } from '@reduxjs/toolkit'


export const controlDeAcceso = createSlice({
  name: 'acceso',
  initialState:{
  },
  reducers: {
    ingreso: (state) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { ingreso } = controlDeAcceso.actions;
