import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  id: null,
};

export const pariwisataSlice = createSlice({
  name: "pariwisata",
  initialState,
  reducers: {
    SetPariwisataData(state, action) {
      state.data = action.payload;
    },
    SetPariwisataId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { SetPariwisataData, SetPariwisataId } = pariwisataSlice.actions;

export default pariwisataSlice.reducer;
