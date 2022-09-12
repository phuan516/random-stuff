import { todayDate } from "./today-date";

const withinDate = (date: string) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const serverDateTime = new Date(todayDate());
  const newDate = new Date(date);

  const diff = Math.ceil(
    (newDate.getTime() - serverDateTime.getTime()) / oneDay
  );

  if (diff == 0) {
    return "#3b82f6";
  } else if ((diff >= 1 && diff <= 3) || diff < 0) {
    return "#ef4444";
  } else if (diff >= 4 && diff <= 7) {
    return "#fbbf24";
  } else {
    return "#000000";
  }
};

export { withinDate };
