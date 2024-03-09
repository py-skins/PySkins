import { get, post } from "./api";

export const userLogin = async () => {
  try {
    const data = await get("/authentication/login");
    return data;
  } catch (e) {
    throw e;
  }
};

export const userRegister = async () => {
  try {
    const data = await post("/authentication/register");
    return data;
  } catch (e) {
    throw e;
  }
};

export const userLogOut = async () => {
  try {
    const data = await post("/authentication/logout");
    return data;
  } catch (e) {
    throw e;
  }
};
