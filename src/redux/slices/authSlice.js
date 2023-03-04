import { createSlice } from "@reduxjs/toolkit";
import { fetchSignIn } from "../../features/NavBar/services/navBarServices";

const defaultUserData = {
  id: null,
  email: "",
  username: "",
  full_name: "",
  photo: null,
  role: null,
  handphone: "",
  address: "",
};

const initialState = {
  status: "idle",
  error_message: "",
  token: {
    access: null,
    refresh: null,
  },
  user_data: defaultUserData,
  modal: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetUserToken(state, action) {
      state.token = action.payload;
    },
    SetUserData(state, action) {
      state.user_data = action.payload;
    },
    ResetUserData(state, action) {
      state.token = { access: null, refresh: null };
      state.user_data = defaultUserData;
    },
    SetLoginModal(state, action) {
      state.modal = action.payload;
    },
    SetErrorMessage(state, action) {
      state.error_message = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSignIn.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(fetchSignIn.rejected, (state) => {
        state.status = "pending";
      });
  },
});

export const {
  SetUserToken,
  SetUserData,
  ResetUserData,
  SetLoginModal,
  SetErrorMessage,
} = authSlice.actions;

export default authSlice.reducer;
