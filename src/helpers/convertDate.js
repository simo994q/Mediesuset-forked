export function convertDateTime(date) {
  let newDate = new Date(date);
  let day = newDate.getDay();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  return `${day} / ${month} - ${year}`;
}
