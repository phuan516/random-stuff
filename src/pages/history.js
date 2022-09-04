import useSWR, { useSWRConfig } from "swr";
import { useState, useEffect } from "react";

import fetcher from "../lib/fetcher";
import ArchivedTodoItems from "../components/archived-todo-items";

const History = () => {
  const { mutate } = useSWRConfig();
  const { data } = useSWR("/api/get-archived-todo-list", fetcher);

  const updateStatus = async (title, status) => {
    await fetch(`/api/update-todo-status`, {
      method: "POST",
      body: JSON.stringify({ title, status }),
    });
    mutate("/api/get-archived-todo-list");
  };

  const filterArchivedItems = (List) => {
    return List.filter((todoItem) => todoItem.status === "Archived");
  };

  const [archivedTodoList, setArchivedTodoList] = useState([]);

  const update = (title, status, dueDate) => {
    const objIndex = archivedTodoList.findIndex((obj) => obj._id === dueDate);

    const updatedArchivedTodoList = archivedTodoList;
    const listIndex = archivedTodoList[objIndex].list.findIndex(
      (todo) => todo.title === title
    );

    updatedArchivedTodoList[objIndex].list[listIndex].status = status;
    setArchivedTodoList(updatedArchivedTodoList);

    updateStatus(title, status);
  };

  useEffect(() => {
    data && setArchivedTodoList(data);
  }, [data]);

  return (
    <div className="m-5">
      {archivedTodoList.length > 0 ? (
        archivedTodoList.map((item) => (
          <div key={item._id}>
            <h1 className="font-bold text-lg">{item._id}</h1>
            <ArchivedTodoItems
              list={filterArchivedItems(item.list)}
              update={update}
            />
          </div>
        ))
      ) : (
        <h2 className="font-bold text-lg">No Archived items</h2>
      )}
    </div>
  );
};

export default History;
