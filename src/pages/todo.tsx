import React from "react";

import AddTodoItem from "../components/add-todo-item";
import TodoList from "../components/todo-list";

const Todo = () => {
  return (
    <div className="flex w-full">
      <AddTodoItem />
      <TodoList />
    </div>
  );
};

export default Todo;
