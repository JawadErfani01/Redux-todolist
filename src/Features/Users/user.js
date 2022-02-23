import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: "",
};

export const user = createSlice({
  name: "user",
  initialState:{},
  reducers: {
    handelform: (state,action) => {
      state.value = action.payload;
    },
  },
});
export const {handelform } = user.actions;
export default user.reducer;