import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserData,
  patchUserData,
  postRecoveryPassword,
  postSignIn,
  postSignOut,
} from "../../../services/services";
import {
  ResetUserData,
  SetAuthMessage,
  SetAuthModal,
  SetUserData,
  SetUserToken,
} from "../../../redux/slices/authSlice";

export const fetchSignIn = createAsyncThunk(
  "fetchSignIn",
  async (formData, { dispatch }) => {
    dispatch(SetAuthMessage(null));
    try {
      const { data } = await postSignIn(formData);
      dispatch(fetchUserData(data));
      return data;
    } catch (error) {
      // console.log(error.response.data.detail);
      dispatch(SetAuthMessage(error.response.data.detail));
      return error.response.status;
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async ({ refresh, access }, { dispatch }) => {
    try {
      const { data } = await getUserData(access);
      dispatch(SetUserToken({ refresh, access }));
      dispatch(SetUserData(data.data));
      dispatch(SetAuthModal(false));
      return data;
    } catch (error) {
      // console.log(error.response.data);
      return error.message;
    }
  }
);

export const fetchUserUpdate = createAsyncThunk(
  "fetchUserUpdate",
  async (formData, { getState, dispatch }) => {
    const { refresh, access } = getState().auth.token;
    try {
      const { data } = await patchUserData(formData, access);
      dispatch(fetchUserData({ refresh, access }));
      return data;
    } catch (error) {
      console.log("gagal update user:", error.message);
      return error.message;
    }
  }
);

export const fetchRecoverPassword = createAsyncThunk(
  "fetchRecoverPassword",
  async (formData, { dispatch, getState }) => {
    const { access } = getState().auth.token;
    try {
      const { data } = await postRecoveryPassword(formData, access);
      return data;
    } catch (error) {
      console.log("error reset password masbro", error.message);
      return error.message;
    }
  }
);

export const fetchSignOut = createAsyncThunk(
  "fetchSignOut",
  async (navigate, { dispatch, getState }) => {
    try {
      const { refresh } = getState().auth.token;
      const { data } = await postSignOut({ refresh });
      dispatch(ResetUserData());
      navigate("/", { replace: true });
      return data;
    } catch (error) {
      // console.log(error.response.data);
      return error.message;
    }
  }
);
