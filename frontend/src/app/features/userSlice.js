import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 0,
  email: "",
  budget: 0,
  userSkinCollection: [],
  isAuthenticated: false,
  refresh: "",
  access: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action:", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
