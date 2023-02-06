import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mailSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, mail: mailSlice.reducer },
});
export default store;
