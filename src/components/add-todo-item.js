import { useEffect, useState } from "react";
import Select from "react-select";
import useSWR from "swr";

import fetcher from "../lib/fetcher";

const addTodoItem = async (item) => {
  const response = await fetch(`/api/add-todo-item`, {
    method: "POST",
    body: JSON.stringify(item),
  });
  console.log(response);
};

const AddTodoItem = () => {
  const [title, setTitle] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [labelsToAdd, setLabelsToAdd] = useState();
  const [labels, setLabels] = useState();

  const { data } = useSWR("/api/get-labels", fetcher);

  useEffect(() => {
    data &&
      setLabels(
        data.map((label) => ({ value: label.name, label: label.name }))
      );
  }, [labels, data]);

  return (
    <div className="w-96 h-64 p-3 rounded-md shadow-lg m-5 bg-white">
      <form
        className=""
        onSubmit={() =>
          addTodoItem({
            title,
            dueDate: date,
            labelsToAdd,
          })
        }
      >
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="pl-3 block w-full border-gray-300 rounded-sm h-9 border bg-white focus:border-blue-400 hover:cursor-pointer hover:border-gray-400"
        />
        <label className="block text-sm font-medium text-gray-700">
          Due Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="block w-full pl-3 border-gray-300 rounded-sm h-9 border bg-white focus:border-blue-400 pr-2 hover:cursor-pointer hover:border-gray-400"
        />
        <label className="block text-sm font-medium text-gray-700">
          Labels
        </label>
        <Select
          defaultValue={labelsToAdd}
          onChange={setLabelsToAdd}
          options={labels}
          isMulti
        />

        <input
          className="border border-gray-300 rounded-sm w-full h-10 mt-4 hover:cursor-pointer hover:border-gray-400"
          type="submit"
          value="+"
        />
      </form>
    </div>
  );
};

export default AddTodoItem;
