import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cases: [],
};

const casesSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {
    update(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { update } = casesSlice.actions;

export default casesSlice.reducer;
