import { get, post } from "./api";

const URLS = {
  userLogin: "authentication/token/",
  userRegister: "authentication/register/",
  userLogout: "authentication/logout/",
  userAccountSkinCollection: "accounts/",
  userAccountUpdateInfo: "accounts/update/",
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

export const userGetProfileDetails = async (config) => {
  try {
    const data = await get(URLS.userAccountUpdateInfo, config);
    return data;
  } catch (e) {
    throw e;
  }
};

export const userUpdateProfileDetails = async (config) => {
  try {
    const data = await post(URLS.userAccountUpdateInfo, config);
    return data;
  } catch (e) {
    throw e;
  }
};
