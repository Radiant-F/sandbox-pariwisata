import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import testSlice from "./slices/testSlice.test.js";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    test: testSlice,
  },
});
