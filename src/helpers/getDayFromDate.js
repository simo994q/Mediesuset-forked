export const getDayFromDate = (date) => {
  let _date = new Date(date);
  let day = _date.getDay();
  return day;
};
