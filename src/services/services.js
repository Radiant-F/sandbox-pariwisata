import axios from "axios";

const host = "https://manajemen.pondokit.com/api";

const config = (token) => ({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    // "Control-Allow-Origin": "*",
  },
});

export const getAPIinfo = () => axios.get(`${host}`, config());
export const postSignIn = (formData) =>
  axios.post(`${host}/login`, formData, config());
