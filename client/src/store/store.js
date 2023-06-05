import { configureStore } from '@reduxjs/toolkit'
import { controlDeAcceso } from './slices/conrolDeAcceso'


export const store = configureStore({
  reducer: {
    ingreso: controlDeAcceso.reducer,
  },
})