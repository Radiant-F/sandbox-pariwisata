// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getAPIinfo, postSignIn } from "../../../services/services";

// export const getTestServices = createAsyncThunk(
//   "getTestServices",
//   async (params, { dispatch, getState }) => {
//     try {
//       const { data } = await getAPIinfo();
//       return data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

// export const fetchSignIn = createAsyncThunk(
//   "fetchSignIn",
//   async (formData, { dispatch }) => {
//     try {
//       const { data } = await postSignIn(formData);
//       return data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );
