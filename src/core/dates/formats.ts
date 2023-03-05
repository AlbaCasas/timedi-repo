import moment from "moment";

export const formatDayMonth = (timestamp: string) => {
  return moment(timestamp).format("DD-MM-YYYY");
};
