import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logOut: (state) => {
     
      state.value = !state.value;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { logOut} = login.actions

export default login.reducer