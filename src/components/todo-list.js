import useSWR, { useSWRConfig } from "swr";
import { useState, useEffect } from "react";

import fetcher from "../lib/fetcher";
import TodoListItem from "./todo-list-item";

const sortTodoList = (todoList) => {
  const inProgressList = todoList.filter(
    (todoItem) => todoItem.status === "In Progress"
  );
  const completedList = todoList.filter(
    (todoItem) => todoItem.status === "Completed"
  );

  inProgressList.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  completedList.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  return [...inProgressList, ...completedList];
};

const TodoList = () => {
  const { mutate } = useSWRConfig();
  const { data } = useSWR("/api/get-todo-items", fetcher);

  const updateStatus = async (title, status) => {
    await fetch(`/api/update-todo-status`, {
      method: "POST",
      body: JSON.stringify({ title, status }),
    });
    mutate("/api/get-todo-items");
  };

  const [todoList, setTodoList] = useState();

  const updateLocal = (title, status) => {
    const objIndex = todoList.findIndex((obj) => obj.title === title);

    const updatedTodoList = todoList;
    updatedTodoList[objIndex].status = status;
    setTodoList(updatedTodoList);

    updateStatus(title, status);
  };

  useEffect(() => {
    data && setTodoList(data);
  }, [data]);

  return (
    <div>
      {todoList && (
        <div className="flex flex-col mt-4">
          {sortTodoList(todoList).map((item) => (
            <TodoListItem
              key={item._id}
              title={item.title}
              dueDate={item.dueDate}
              status={item.status}
              labels={item.labels}
              updateLocal={updateLocal}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
