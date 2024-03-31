import { get, post } from "./api";

export const userLogin = async (header, body) => {
  try {
    const data = await post("authentication/token/", header, body);
    return data;
  } catch (e) {
    throw e;
  }
};

export const userRegister = async (header, body) => {
  try {
    const data = await post("authentication/register/", header, body);
    return data;
  } catch (e) {
    throw e;
  }
};

export const userLogOut = async (header) => {
  try {
    const data = await post("/authentication/logout", header);
    return data;
  } catch (e) {
    throw e;
  }
};
