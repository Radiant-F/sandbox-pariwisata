import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  SetErrorMessage,
  SetLoginModal,
  SetUserData,
  SetUserToken,
} from "../../../redux/slices/authSlice";
import { getUserData, postSignIn } from "../../../services/APIs";

export const fetchSignIn = createAsyncThunk(
  "fetchSignIn",
  async (formData, { dispatch }) => {
    dispatch(SetErrorMessage(""));
    try {
      const { data } = await postSignIn(formData);
      dispatch(fetchUserData(data));
      return data;
    } catch (error) {
      const message = error.response.data?.detail;
      if (message) dispatch(SetErrorMessage(message));
      return error.message;
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async (token, { dispatch }) => {
    try {
      const { data } = await getUserData(token.access);
      dispatch(SetLoginModal(false));
      dispatch(SetUserData(data.data));
      dispatch(SetUserToken(token));
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
