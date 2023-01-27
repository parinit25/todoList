import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todoAction } from "../reducer/todoSlice";
const ListRender = () => {
  const listItems = useSelector((state) => state.todo.Dummy_Data);
  const dispatch = useDispatch();
  const todoDeleteHandler = (id) => {
    dispatch(todoAction.deleteItemsFromTodoList(id));
  };
  return (
    <div>
      {listItems.map((item) => (
        <li key={item.sno}>
          {item.title} {item.description}
          <button onClick={() => todoDeleteHandler(item.sno)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default ListRender;
