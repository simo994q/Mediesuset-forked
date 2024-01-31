export const getEventColor = (id) => {
  let red = `rgb(233,72,91)`;
  let blue = `rgb(74,111,191)`;
  let green = `rgb(84,160,71)`;
  let purple = `rgb(161,46,143)`;

  switch (id) {
    case "1":
      return red;
    case "2":
      return blue;
    case "3":
      return green;
    case "4":
      return purple;
  }
};
