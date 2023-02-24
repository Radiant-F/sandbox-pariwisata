import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import touristObjSlice from "./slices/touristObjSlice";
import utilsSlice from "./slices/utilsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tourist_obj: touristObjSlice,
    utils: utilsSlice,
  },
});
