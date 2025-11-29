import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decriment: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decriment } = counterSlice.actions;

export default counterSlice.reducer;
