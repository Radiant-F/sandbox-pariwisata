import { createAsyncThunk } from "@reduxjs/toolkit";
import { postTouristObject } from "../../../services/services";

export const fetchAddUserTourist = createAsyncThunk(
  "userTourist",
  async (formData, { getState, dispatch }) => {
    try {
      const { data } = await postTouristObject(formData);
      console.log("Berhasil menambah obj wisata:", data);
      return data;
    } catch (error) {
      console.log("Gagal menambah obj wisata masbro:", error.message);
      return error.message;
    }
  }
);
