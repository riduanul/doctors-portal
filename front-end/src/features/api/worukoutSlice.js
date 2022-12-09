import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editing: {},
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editDeActive: (state, action) => {
      state.editing = {};
    },
  },
});

export const { aditActive, editDeActive } = workoutSlice.actions;
export default workoutSlice.reducer;
