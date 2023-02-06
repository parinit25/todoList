import { createSlice } from "@reduxjs/toolkit";
import { logIn, userProfile } from "../reducer/asyncAuthReducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: undefined,
    isLoggedIn: false,
  },
  reducers: {
    userLogOut(state, action) {
      state.isLoggedIn = false;
      state.userData = undefined;
      localStorage.removeItem("localId");
      localStorage.removeItem("idToken");
    },
  },
  extraReducers(builder) {
    builder.addCase(logIn.fulfilled, (state, action) => {
      const response = action.payload;
      localStorage.setItem("idToken", response.idToken);
      localStorage.setItem("localId", response.localId);
      state.isLoggedIn = true;
    });
    builder.addCase(userProfile.fulfilled, (state, action) => {
      const response = action.payload;
      state.userData = response;
      console.log(state.userData)
    });
  },
});
export default userSlice;
export const userActions = userSlice.actions;
