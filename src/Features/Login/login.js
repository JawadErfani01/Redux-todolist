import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: false,
};

export const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state) => {
      state.value = !state.value;
    },
  },
});

export const { logOut } = login.actions;
export default login.reducer;
