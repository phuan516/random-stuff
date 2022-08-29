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

const Todo = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [labelsToAdd, setLabelsToAdd] = useState();

  return (
    <div className="w-96 border-2 border-gray-500 p-3 rounded-md">
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
        <div className="mt-1 relative rounded-md border border-gray-500 shadow-sm">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-7"
          />
        </div>
        <label className="block text-sm font-medium text-gray-700">
          Due Date
        </label>
        <div className="mt-1 relative rounded-md border border-gray-500 shadow-sm">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-7"
          />
        </div>
        <label className="block text-sm font-medium text-gray-700">
          Labels
        </label>
        <div className="mt-1 relative rounded-md border border-gray-500 shadow-sm">
          <Select
            defaultValue={labelsToAdd}
            onChange={setLabelsToAdd}
            options={labels}
            isMulti
          />
        </div>
        <input
          className="border border-gray-500 rounded-md w-full h-7 mt-2"
          type="submit"
          value="+"
        />
      </form>
    </div>
  );
};

export default Todo;
