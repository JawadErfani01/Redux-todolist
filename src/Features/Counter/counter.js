import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      if (state <= 0) return;
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    Reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, incrementByAmount,Reset } = counter.actions;
export default counter.reducer;
