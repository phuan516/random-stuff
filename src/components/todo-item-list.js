import useSWR from "swr";

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
  Archived: "#e31e1e",
};

const TodoItemList = () => {
  const { data } = useSWR("/api/get-todo-items", fetcher);

  return (
    <div>
      {data && (
        <div className="flex flex-col mt-4">
          {data.map((item) => (
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
              <h2>{item.dueDate}</h2>
              <button
                style={{ backgroundColor: "#8957e5" }}
                className="text-white rounded-md p-2 border-2 border-transparent hover:border-violet-700"
              >
                Completed
              </button>
              <button
                style={{ backgroundColor: "#e31e1e" }}
                className="text-white rounded-md p-2 ml-2 border-2 border-transparent hover:border-red-700"
              >
                Archive
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoItemList;
