import { get, post } from "./api";

export const fetchCases = async () => {
  try {
    const data = await get("/case/all");
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchCaseSkins = async (caseName) => {
  try {
    const data = await get(`/case/?caseName=${caseName}`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchCasesOld = async () => {
  try {
    const data = await get("/test/case");
    return data;
  } catch (e) {
    throw e;
  }
};

export const openCase = async (caseName) => {
  try {
    const data = await post("/case/open", caseName);
    return data;
  } catch (e) {
    throw e;
  }
};
