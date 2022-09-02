import { useState } from "react";

import { invertColor } from "../lib/invert-color";
import { formatDate } from "../lib/format-date";
import { statusColor } from "../lib/status";
import StatusButtons from "./status-buttons";

const TodoListItem = ({ title, status, dueDate, labels, update }) => {
  const [detailedDisplay, setDetailedDisplay] = useState(false);

  return (
    <div
      className="w-96 p-3 rounded-md shadow-lg my-1 bg-white hover:cursor-pointer hover:shadow-2xl border-4"
      style={{ borderColor: statusColor[status] }}
      onClick={() => {
        setDetailedDisplay(!detailedDisplay);
      }}
    >
      <h1 className="font-bold text-lg">{title}</h1>
      {!detailedDisplay && (
        <h1 className="font-bold text-lg">{formatDate(new Date(dueDate))}</h1>
      )}

      {detailedDisplay && (
        <div>
          <div className="my-2 font-bold">
            <p style={{ color: `${statusColor[status]}` }}>
              {status.toUpperCase()}
            </p>
          </div>
          <div className="relative no-wrap flex flex-row my-2">
            {labels.map((label) => (
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
          <h2 className="font-bold mb-2">{formatDate(new Date(dueDate))}</h2>
          <StatusButtons status={status} title={title} update={update} />
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
