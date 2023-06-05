import { createSlice } from '@reduxjs/toolkit';

export const  empleadosSlice = createSlice({
    name: 'empleados',
    initialState: {
        empleados: []
    },
    reducers: {
        createEmpleados: ( state, action ) => {
            state.empleados = action.payload.empleados;
        }
    }
});


// Action creators are generated for each case reducer function
export const { createEmpleados } = empleadosSlice.actions;