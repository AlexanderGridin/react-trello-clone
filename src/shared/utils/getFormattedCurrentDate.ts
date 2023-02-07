export const getFormattedCurrentDate = () => {
  const dateParts = new Date().toLocaleDateString().split("/");
  const [month, day, year] = dateParts;

  return `${Number(day) < 10 ? `0${day}` : day}.${
    Number(month) < 10 ? `0${month}` : month
  }.${year}`;
};
