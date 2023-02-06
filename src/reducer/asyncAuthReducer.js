import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../services/asyncAuthServices";

export const signUp = createAsyncThunk(
  "signup",
  async (userDetails, thunkApi) => {
    const response = await apiAuthService.userSignUp(userDetails);
    console.log(response);
    return response;
  }
);
export const logIn = createAsyncThunk(
  "logIn",
  async (userDetails, thunkAPi) => {
    const response = await apiAuthService.userLogIn(userDetails);
    console.log(response);
    return response;
  }
);
export const userProfile = createAsyncThunk("userProfile", async (thunkAPi) => {
  const response = await apiAuthService.getUserProfile();
  return response;
});
export const updateProfile = createAsyncThunk(
  "updateProfile",
  async (userDetails, thunkAPI) => {
    const response = await apiAuthService.updateUserProfile(userDetails);
  }
);
