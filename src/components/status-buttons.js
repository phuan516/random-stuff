import { statusColor, allStatus } from "../lib/status";

const buttonsToDisplay = (status) => {
  return allStatus.filter((s) => s !== status);
};

const StatusButtons = ({ status, update }) => {
  return (
    <div>
      {buttonsToDisplay(status).map((s) => (
        <button
          key={s}
          style={{ backgroundColor: statusColor[s] }}
          className="rounded-md p-1 mr-2 text-white text-xs"
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
