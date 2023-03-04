import axios from "axios";

const host = process.env.REACT_APP_API_KEY;

const config = (access) => ({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${access}`,
  },
});

export const postSignIn = (formData) =>
  axios.post(`${host}/auth/login/`, formData, config());
export const getUserData = (access) =>
  axios.get(`${host}/user/user/me`, config(access));
