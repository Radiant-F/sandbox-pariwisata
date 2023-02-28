import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserData,
  patchUserData,
  postRecoveryPassword,
  postRefreshToken,
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
      localStorage.setItem("user_credential", JSON.stringify(formData));
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

// This function will be triggered if token is invalid
export const fetchRefreshToken = createAsyncThunk(
  "fetchRefreshToken",
  async ({ next, formData }, { dispatch, getState }) => {
    const { refresh } = getState().auth.token;
    try {
      const { data } = await postRefreshToken({ refresh });
      dispatch(SetUserToken({ access: data.access, refresh }));
      console.log("refresh berhasil masbro", data);
      switch (next) {
        case "reset-password":
          dispatch(fetchRecoverPassword());
          break;
        case "user-update":
          dispatch(fetchUserUpdate(formData));
          break;
        default:
          dispatch(fetchUserData({ refresh, access: data.access }));
      }
      return data;
    } catch (error) {
      console.log("refresh gagal masbro", error.response);
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
      if (error.response.data.code === "token_not_valid")
        dispatch(fetchRefreshToken({ next: "user-update", formData }));
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
      if (error.response.data.code === "token_not_valid")
        dispatch(fetchRefreshToken({ next: "reset-password" }));
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
      localStorage.removeItem("user_credential");
      dispatch(ResetUserData());
      navigate("/", { replace: true });
      return data;
    } catch (error) {
      // console.log(error.response.data);
      return error.message;
    }
  }
);
