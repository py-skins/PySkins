import { post } from "./API";

const URLS = {
  userLogin: "authentication/token/",
  userRegister: "authentication/register/",
  userLogout: "authentication/logout/",
};

export const userLogin = async (config) => {
  try {
    const data = await post(URLS.userLogin, config);
    return data;
  } catch (e) {
    throw e;
  }
};

export const userRegister = async (config) => {
  try {
    const data = await post(URLS.userRegister, config);
    return data;
  } catch (e) {
    throw e;
  }
};

export const userLogOut = async (config) => {
  try {
    const data = await post(URLS.userLogout, config);
    return data;
  } catch (e) {
    throw e;
  }
};