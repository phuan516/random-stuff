import { format } from "date-fns";

const todayDate = () => {
  return format(new Date(), "yyyy/MM/dd").toString();
};

export { todayDate };
