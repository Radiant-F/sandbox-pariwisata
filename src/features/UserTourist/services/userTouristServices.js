import { createAsyncThunk } from "@reduxjs/toolkit";
import { SetBorderline } from "../../../redux/slices/touristObjSlice";
import { getBorderline, postTouristObject } from "../../../services/services";

export const fetchAddUserTourist = createAsyncThunk(
  "userTourist",
  async (formData, { getState, dispatch }) => {
    const { access } = getState().auth.token;
    console.log("body data wisata: ", formData);
    try {
      const { data } = await postTouristObject(formData, access);
      console.log("Berhasil menambah obj wisata:", data);
      return data;
    } catch (error) {
      console.log("Gagal menambah obj wisata masbro:", error.response);
      return error.message;
    }
  }
);

export const fetchMapBorder = createAsyncThunk(
  "fetchMapBorder",
  async (args, { getState, dispatch }) => {
    const { access } = getState().auth.token;
    try {
      const { data } = await getBorderline(access);
      dispatch(SetBorderline(data.data));
      return data;
    } catch (error) {
      console.log("gagal data borderline:", error.response);
      return error.message;
    }
  }
);
