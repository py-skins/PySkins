import { get, post } from "./api";

const URLS = {
  fetchCases: "cases",
  caseSkins: "cases/", //GET
  caseOpening: "cases/", //POST
};

export const fetchCases = async () => {
  try {
    const data = await get(URLS.fetchCases);
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchCaseSkins = async (caseSlug, config) => {
  try {
    const data = await get(URLS.caseSkins + caseSlug, config);
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchCaseOpening = async (caseSlug, config) => {
  try {
    const data = await post(`${URLS.caseOpening}${caseSlug}/open/`, config);
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchCasesOld = async () => {
  try {
    const data = await get("api/test/case");
    return data;
  } catch (e) {
    throw e;
  }
};
