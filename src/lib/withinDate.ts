import { todayDate } from "./todayDate";

const warningColors = {
  today: "#3b82f6",
  threeDays: "#ef4444",
  SevenDays: "#fbbf24",
};

const withinDate = (date: string) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const serverDateTime = new Date(todayDate());
  const newDate = new Date(date);

  const diff = Math.ceil(
    (newDate.getTime() - serverDateTime.getTime()) / oneDay
  );

  if (diff == 0) {
    return warningColors["today"];
  } else if (diff <= 3) {
    return warningColors["threeDays"];
  } else if (diff <= 7) {
    return warningColors["SevenDays"];
  } else {
    return "#000000";
  }
};

export { withinDate };
