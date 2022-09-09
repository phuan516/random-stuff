import { format } from "date-fns";

const formatDate = (date: Date) => {
  const dt = new Date(date);
  const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60000);
  return format(dtDateOnly, "yyy/MM/dd");
};

export { formatDate };
