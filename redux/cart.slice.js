import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      console.log('action::: ', action.payload.attributes);
      return { ...state, pizzas: [...state.pizzas, action.payload.attributes] };
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { add } = cartSlice.actions;
