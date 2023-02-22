import { createSlice } from "@reduxjs/toolkit";
import { fetchSignIn } from "../../features/__test__/services/testServices";

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
  extraReducers(builder) {
    builder
      .addCase(fetchSignIn.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { SetStatusTest } = testSlice.actions;

export default testSlice.reducer;
