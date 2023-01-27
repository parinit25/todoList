import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../reducer/todoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const newTodoAddHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      sno: Math.random(),
      title: title,
      description: description,
    };
    dispatch(todoAction.addItemsToTodoList(newTodo));
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={newTodoAddHandler}>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={title} />
        <label>Description</label>
        <input
          type="description"
          onChange={descriptionChangeHandler}
          value={description}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
