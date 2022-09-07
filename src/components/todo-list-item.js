import { useState } from "react";
import { PencilAltIcon } from "@heroicons/react/solid";

import { invertColor } from "../lib/invert-color";
import { formatDate } from "../lib/format-date";
import { statusColor } from "../lib/status";
import StatusButtons from "./status-buttons";
import EditTodoItem from "./edit-todo-item";

const TodoListItem = ({ title, status, dueDate, labels, update }) => {
  const [detailedDisplay, setDetailedDisplay] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div
      className="w-96 p-3 rounded-md shadow-lg my-1 hover:cursor-pointer hover:shadow-2xl text-white"
      style={{ backgroundColor: statusColor[status] }}
      onClick={() => {
        setDetailedDisplay(!detailedDisplay);
      }}
    >
      <h1 className="font-bold text-lg">{title}</h1>
      {detailedDisplay && (
        <div>
          <div className="my-2 font-bold">
            <p>{status.toUpperCase()}</p>
          </div>
          <div className="relative no-wrap flex flex-row my-2">
            {labels.map((label) => (
              <span
                key={label.name}
                className="py-0.5 p-3 rounded-full text-xs mr-2 font-bold"
                style={{
                  backgroundColor: `#${label.color}`,
                  color: `${invertColor(label.color)}`,
                }}
              >
                {label.name}
              </span>
            ))}
          </div>
          <div className="flex flex-row justify-between">
            <h2 className="font-bold mb-2">{formatDate(new Date(dueDate))}</h2>
            <PencilAltIcon
              className="h-6 w-6 text-white"
              onClick={() => setDisplayModal(true)}
            />
          </div>
          <StatusButtons
            status={status}
            title={title}
            update={update}
            dueDate={dueDate}
          />
        </div>
      )}
      <EditTodoItem
        open={displayModal}
        setOpen={setDisplayModal}
        title={title}
        dueDate={dueDate}
        selectedLabels={labels}
      />
    </div>
  );
};

export default TodoListItem;
