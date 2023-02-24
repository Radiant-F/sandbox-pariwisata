import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddUserTourist,
  fetchMapBorder,
} from "../../features/UserTourist/services/userTouristServices";

const initialState = {
  status: "idle",
  status_borderline: "idle",
  data: null,
  tourist_id: null,
  borderline: {
    type: null,
    coordinates: [[[]]],
  },
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
    SetBorderline(state, action) {
      state.borderline = action.payload;
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
    builder
      .addCase(fetchMapBorder.pending, (state, action) => {
        state.status_borderline = "pending";
      })
      .addCase(fetchMapBorder.fulfilled, (state, action) => {
        state.status_borderline = "success";
      })
      .addCase(fetchMapBorder.rejected, (state, action) => {
        state.status_borderline = "failed";
      });
  },
});

export const { SetObjTouristData, SetTouristId, SetBorderline } =
  touristObjSlice.actions;

export default touristObjSlice.reducer;
