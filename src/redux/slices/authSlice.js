import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSignIn,
  fetchUserUpdate,
} from "../../features/Auth/services/authServices";

const defaultUserData = {
  id: 0,
  email: "",
  username: "",
  full_name: "",
  photo: "",
  role: null,
  handphone: "",
  address: "",
  is_active: false,
};

const initialState = {
  token: { access: null, refresh: null },
  user_data: {},
  status: "idle",
  message: null,
  auth_modal: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetUserToken(state, action) {
      state.token = action.payload;
    },
    SetAuthModal(state, action) {
      state.auth_modal = action.payload;
    },
    SetUserData(state, action) {
      state.user_data = action.payload;
    },
    ResetUserData(state, action) {
      state.user_data = defaultUserData;
      state.token = { access: null, refresh: null };
    },
    SetAuthMessage(state, action) {
      state.message = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSignIn.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.status = "rejected";
      });
    builder
      .addCase(fetchUserUpdate.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchUserUpdate.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(fetchUserUpdate.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const {
  SetUserToken,
  SetAuthModal,
  SetUserData,
  ResetUserData,
  SetAuthMessage,
} = authSlice.actions;

export default authSlice.reducer;
