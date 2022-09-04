import useSWR, { useSWRConfig } from "swr";
import { useState, useEffect } from "react";

import fetcher from "../lib/fetcher";
import TodoListItem from "./todo-list-item";
import { formatDate } from "../lib/format-date";

const sortTodoList = (todoList) => {
  const ReadyList = todoList.filter((todoItem) => todoItem.status === "Ready");
  const workingList = todoList.filter(
    (todoItem) => todoItem.status === "Working"
  );
  const doneList = todoList.filter((todoItem) => todoItem.status === "Done");

  ReadyList.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  workingList.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  doneList.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  return [...ReadyList, ...workingList, ...doneList];
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

  const updateLocal = (title, status, dueDate) => {
    const objIndex = todoList.findIndex((obj) => obj._id === dueDate);

    const updatedTodoList = todoList;
    const listIndex = todoList[objIndex].list.findIndex(
      (todo) => todo.title === title
    );

    updatedTodoList[objIndex].list[listIndex].status = status;

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
          {todoList.map((day) => (
            <div key={day._id}>
              <h1 className="font-bold text-lg">
                {formatDate(new Date(day._id))}
              </h1>
              {sortTodoList(day.list).map((item) => (
                <TodoListItem
                  key={item._id}
                  title={item.title}
                  dueDate={item.dueDate}
                  status={item.status}
                  labels={item.labels}
                  update={updateLocal}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
