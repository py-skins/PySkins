import { get, post } from "./api";

export const fetchCases = async () => {
  try {
    const data = await get("/test/case");
    return data;
  } catch (e) {
    throw e;
  }
};

export const openCase = async (caseName) => {
  try{
    const data = await post('/case/open', caseName);
    return data;
  } catch(e){
    throw e;
  }
}
