import { configureStore } from "@reduxjs/toolkit";
import todoList from "../reducer/todoSlice";

const store = configureStore({
  reducer: { todo: todoList.reducer },
});
export default store;
