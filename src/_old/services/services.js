import axios from "axios";

const host = "https://api-entrytest.sandboxindonesia.id/api";

const config = (access) => ({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access}`,
    Accept: "application/json",
  },
});

const configMultipart = (access) => ({
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${access}`,
  },
});

// User services
export const postSignIn = (formData) =>
  axios.post(`${host}/auth/login/`, formData, config());
export const getUserData = (access) =>
  axios.get(`${host}/user/user/me/`, config(access));
export const postRecoveryPassword = (formData, access) =>
  axios.post(`${host}/user/user/change-password/`, formData, config(access));
export const patchUserData = (formData, access) =>
  axios.patch(`${host}/user/user/me/`, formData, configMultipart(access));
export const postSignOut = (refresh) =>
  axios.post(`${host}/auth/logout/`, refresh);
export const postRefreshToken = (refresh) =>
  axios.post(`${host}/auth/refresh/`, refresh, config());

// Tourist object services
export const postTouristObject = (formData, access) =>
  axios.post(
    `${host}/tourist-object/tourist-object/`,
    formData,
    configMultipart(access)
  );
export const getBorderline = (access) =>
  axios.get(`${host}/datamaster/borderline/`, config(access));
export const getTouristCategory = () =>
  axios.get(`${host}/datamaster/tourist-object-category/`);
