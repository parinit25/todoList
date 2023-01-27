import { createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
  name: "todo",
  initialState: {
    Dummy_Data: [
      { sno: "1", title: "Shopping", description: "Go to mall at 5 P.M." },
      { sno: "2", title: "Study", description: "Go to library at 6 P.M." },
      { sno: "3", title: "Cooking", description: "Go to Kitchen at 7 P.M." },
      { sno: "4", title: "Playing", description: "Go to Ground at 8 P.M." },
    ],
  },
  reducers: {
    addItemsToTodoList(state, action) {
      const response = action.payload;
      state.Dummy_Data = state.Dummy_Data.push(response);
    },
    deleteItemsFromTodoList(state, action) {
      const id = action.payload;
      state.Dummy_Data = state.Dummy_Data.filter((item) => item.sno !== id);
    },
    editItemsInTodoList(state, action) {},
  },
});
export default todoList;
export const todoAction = todoList.actions;
