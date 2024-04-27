import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  refresh: "",
  access: "",
  budget: 10.0,
  email: "",
  //=============================
  username: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  profilePicture: "",
  //=============================
  userSkinCollection: [],
  //=============================
  userId: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    update: (state, action) => {
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

export const { login, update, logout } = userSlice.actions;

export default userSlice.reducer;
