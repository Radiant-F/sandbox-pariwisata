import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: null,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    SetStatusTest(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { SetStatusTest } = testSlice.actions;

export default testSlice.reducer;
