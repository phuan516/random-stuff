import useSWR from "swr";

const invertColor = (hex) => {
  const r = Number.parseInt(hex.slice(0, 2), 16);
  const g = Number.parseInt(hex.slice(2, 4), 16);
  const b = Number.parseInt(hex.slice(4, 6), 16);

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
};

const TodoItemList = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data } = useSWR("/api/get-todo-items", fetcher);

  console.log(data);

  return (
    <div>
      <div className="w-96 p-3 rounded-md shadow m-5 bg-white">
        {data && (
          <div className="flex flex-col">
            {data.map((item) => (
              <div key={item._id}>
                <p className="font-bold text-lg">{item.title}</p>
                <p>{item.status}</p>
                <p>{item.dueDate}</p>
                <div className="relative no-wrap flex flex-row overflow-hidden">
                  {item.labels.map((label) => (
                    <span
                      key={label.name}
                      className="border mx-0.5 py-0.5 p-3 rounded-full text-xs "
                      style={{
                        backgroundColor: `#${label.color}`,
                        color: `${invertColor(label.color)}`,
                      }}
                    >
                      {label.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItemList;
