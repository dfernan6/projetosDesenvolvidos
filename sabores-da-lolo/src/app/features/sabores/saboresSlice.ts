// src/features/sabores/saboresSlice.ts
import { createSlice } from '@reduxjs/toolkit';

type Sabor = string; // or replace 'string' with your sabor type/interface

const saboresSlice = createSlice({
  name: 'sabores',
  initialState: [] as Sabor[],
  reducers: {
    adicionarSabor: (state, action: { payload: Sabor }) => {
      state.push(action.payload);
    },
  },
});

export default saboresSlice.reducer;