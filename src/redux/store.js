import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/services/authSlice";
import pariwisataSlice from "./slices/pariwisataSlice";
import testSlice from "./slices/testSlice.test.js";
import utilsSlice from "./slices/utilsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    test: testSlice,
    pariwisata: pariwisataSlice,
    utils: utilsSlice,
  },
});
