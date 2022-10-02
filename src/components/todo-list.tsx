import useSWR, { useSWRConfig } from "swr";
import React, { useState, useEffect } from "react";

import { fetcher } from "../lib/fetcher";
import TodoListItem from "./todo-list-item";
import { formatDate } from "../lib/format-date";
import { withinDate } from "../lib/within-date";
import { sortTodoList } from "../lib/sort-todo-list";

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

  const [todoList, setTodoList] = useState<any>();

  const updateLocal = (title, status, dueDate) => {
    if (todoList) {
      const objIndex = todoList.findIndex((obj) => obj._id === dueDate);

      const updatedTodoList = todoList;
      const listIndex = todoList[objIndex].list.findIndex(
        (todo) => todo.title === title
      );

      updatedTodoList[objIndex].list[listIndex].status = status;

      setTodoList(updatedTodoList);
      updateStatus(title, status);
    }
  };

  useEffect(() => {
    data && setTodoList(data);
  }, [data]);

  return (
    <div>
      {todoList ? (
        <div className="flex flex-col ml-4">
          {todoList.map((day) => (
            <div key={day._id}>
              <h1
                className="font-bold text-lg"
                style={{ color: withinDate(formatDate(new Date(day._id))) }}
              >
                {formatDate(new Date(day._id))}
              </h1>
              <div className="flex flex-wrap">
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
            </div>
          ))}
        </div>
      ) : (
        <h1>...Loading</h1>
      )}
    </div>
  );
};

export default TodoList;
