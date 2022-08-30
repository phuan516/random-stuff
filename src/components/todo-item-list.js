import useSWR, { useSWRConfig } from "swr";
import { useState, useEffect } from "react";
import { format } from "date-fns";

import fetcher from "../lib/fetcher";

const invertColor = (hex) => {
  const r = Number.parseInt(hex.slice(0, 2), 16);
  const g = Number.parseInt(hex.slice(2, 4), 16);
  const b = Number.parseInt(hex.slice(4, 6), 16);

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
};

const statusColor = {
  Completed: "#8957e5",
  "In Progress": "#24e31e",
};

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

const formatDate = (date) => {
  const dt = new Date(date);
  const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60000);
  return format(dtDateOnly, "yyy/MM/dd");
};

const TodoItemList = () => {
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
            <div
              key={item._id}
              className="w-96 p-3 rounded-md shadow-lg mx-2 my-1 bg-white"
            >
              <h1 className="font-bold text-lg">{item.title}</h1>
              <div className="my-2">
                <p>{item.status}</p>

                <div
                  style={{ backgroundColor: `${statusColor[item.status]}` }}
                  className="bg-green-400 h-3 rounded-full"
                ></div>
              </div>
              <div className="relative no-wrap flex flex-row my-2">
                {item.labels.map((label) => (
                  <span
                    key={label.name}
                    className="py-0.5 p-3 rounded-full text-xs mr-2"
                    style={{
                      backgroundColor: `#${label.color}`,
                      color: `${invertColor(label.color)}`,
                    }}
                  >
                    {label.name}
                  </span>
                ))}
              </div>
              <h3>DUE DATE:</h3>
              <h2>{formatDate(new Date(item.dueDate))}</h2>
              <button
                style={{ backgroundColor: "#8957e5" }}
                className="text-white font-bold rounded-md p-2 border-2 border-transparent hover:border-violet-700"
                onClick={() => {
                  updateLocal(item.title, "Completed");
                }}
              >
                Completed
              </button>
              <button
                style={{ backgroundColor: "#e31e1e" }}
                className="text-white font-bold rounded-md p-2 ml-2 border-2 border-transparent hover:border-red-700"
                onClick={() => {
                  updateLocal(item.title, "Archived");
                }}
              >
                Archive
              </button>
              <button
                style={{ backgroundColor: "#24e31e" }}
                className="font-bold rounded-md p-2 ml-2 border-2 border-transparent hover:border-green-500"
                onClick={() => {
                  updateLocal(item.title, "In Progress");
                }}
              >
                In Progress
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoItemList;
