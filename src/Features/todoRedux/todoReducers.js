import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: false,
  editId: "",
  show: false,
  message: { type: "", mes: "" },
  data: [{ name: "jawad", lastname: "erfani", id: "1" }],
};

export const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    handelData: (state, payload) => {
      if (state.edit) {
        state.show = true;
        state.message = { type: "su", mes: `you updata  same value` };
        state.data = state.data.map((persone) => {
          if (persone.id === state.editId)
            return {
              ...state.data,
              name: payload.payload.name,
              lastname: payload.payload.lastname,
              id: Math.random() * 100000,
            };
          return persone;
        });
        state.edit = false;
      } else {
        state.data = [
          ...state.data,
          {
            name: payload.payload.name,
            lastname: payload.payload.lastname,
            id: Math.random() * 100000,
          },
        ];
        state.show = true;
        state.message = { type: "su", mes: "you added same value" };
      }
    },
    removePersnoe: (state, Rid) => {
      state.data = state.data.filter((persone) => persone.id !== Rid.payload);
      state.show = true;
      state.message = { type: "error", mes: "you remove same value" };
    },
    clearList: (state,len) => {
      state.data = [];
      state.show = true;
      state.message = { type: "error", mes: `you remove ${len.payload} value` };
    },
    updatePersnoe: (state, Upid) => {
      state.edit = true;
      state.editId = Upid.payload;
    },
    hideMessage: (state, action) => {
      state.show = !state.show;
      state.message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handelData,
  removePersnoe,
  updatePersnoe,
  hideMessage,
  clearList,
} = todo.actions;

export default todo.reducer;
