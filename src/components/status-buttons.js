import { statusColor, allStatus } from "../lib/status";

const buttonsToDisplay = (status) => {
  return allStatus.filter((s) => s !== status);
};

const StatusButtons = ({ status, title, update }) => {
  return (
    <div className=" flex flex-col">
      {buttonsToDisplay(status).map((s) => (
        <button
          key={s}
          style={{ backgroundColor: statusColor[s] }}
          className="rounded-md p-1 mb-2 text-white text-xs"
          onClick={() => {
            update(title, s);
          }}
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default StatusButtons;
