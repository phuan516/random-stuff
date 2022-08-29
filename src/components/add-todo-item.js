import { useState } from "react";
import Select from "react-select";

const addTodoItem = async (item) => {
  const response = await fetch(`/api/add-todo-item`, {
    method: "POST",
    body: JSON.stringify(item),
  });
  console.log(response);
};

const labels = [
  { value: "dashboard", label: "dashboard" },
  { value: "assignment", label: "assignment" },
];

const AddTodoItem = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [labelsToAdd, setLabelsToAdd] = useState();

  return (
    <div className="w-96 h-64 p-3 rounded-md shadow m-5 bg-white">
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
