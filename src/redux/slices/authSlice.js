import { createSlice } from "@reduxjs/toolkit";

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
  token: {
    access: null,
    refresh: null,
  },
  user_data: defaultUserData,
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
  },
  extraReducers(builder) {},
});

export const { SetUserToken, SetUserData, ResetUserData } = authSlice.actions;

export default authSlice.reducer;
