import { get, post } from "./api";

export const fetchCases = async () => {
  try {
    const data = await get("cases");
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchCaseSkins = async (caseSlug) => {
  try {
    const data = await get(`cases/${caseSlug}`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchCaseOpening = async (caseSlug, header) => {
  try {
    const data = await post(`cases/${caseSlug}/`, header);
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
