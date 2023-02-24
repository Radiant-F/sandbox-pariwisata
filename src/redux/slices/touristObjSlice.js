import { createSlice } from "@reduxjs/toolkit";
import { fetchAddUserTourist } from "../../features/UserTourist/services/userTouristServices";

const initialState = {
  status: "idle",
  data: null,
  tourist_id: null,
};

export const touristObjSlice = createSlice({
  name: "tourist-obj",
  initialState,
  reducers: {
    SetObjTouristData(state, action) {
      state.data = action.payload;
    },
    SetTouristId(state, action) {
      state.tourist_id = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAddUserTourist.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchAddUserTourist.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(fetchAddUserTourist.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { SetObjTouristData, SetTouristId } = touristObjSlice.actions;

export default touristObjSlice.reducer;
