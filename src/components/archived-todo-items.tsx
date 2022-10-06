import { statusColor } from "../lib/status";

const ArchivedTodoItems = ({ list, update }) => {
  return (
    <div>
      {list.length > 0 ? (
        <div>
          {list.map((todo) => (
            <div
              key={todo.title}
              className="p-2 rounded-md shadow-lg flex justify-between mb-2"
              style={{ backgroundColor: statusColor[todo.status] }}
            >
              <h2 className="font-bold text-lg text-white">{todo.title}</h2>
              <div>
                <button
                  style={{ backgroundColor: "#62a3c6" }}
                  className="rounded-md p-1 text-white text-xs font-bold mr-2"
                  onClick={() => {
                    update(todo._id, "Ready", todo.dueDate);
                  }}
                >
                  Restore
                </button>
                <button
                  className="rounded-md p-1 text-white text-xs font-bold bg-red-600"
                  onClick={() => {
                    update(todo._id, "Deleted", todo.dueDate);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="font-bold text-lg">No Archived items</h2>
      )}
    </div>
  );
};

export default ArchivedTodoItems;
