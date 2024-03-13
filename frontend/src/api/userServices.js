import { get, post } from "./api";

export const userLogin = async (body) => {
  try {
    const data = await get("/authentication/login", body);
    return data;
  } catch (e) {
    throw e;
  }
};

export const userRegister = async (body) => {
  try {
    const data = await post("/authentication/register", body);
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
