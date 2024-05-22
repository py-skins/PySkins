import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/user";

const initialState: UserType = {
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
    login: (state, action: PayloadAction<UserType>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    update: (state, action: PayloadAction<UserType>) => {
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
