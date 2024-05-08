export const dateFormat = (date) => {
  const firstDate = date.slice(0, 10).replaceAll("-", "/");
  const secondDate = date.slice(12).trim().replaceAll("-", "/");
  const formatedDate = `${firstDate} - ${secondDate}`;
  return formatedDate;
};
