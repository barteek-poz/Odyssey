export const dateFormat = (date) => {
  const dates = date.map((singleDate) =>
    singleDate.slice(0, 10).replaceAll("-", "/")
  );
  const formatedDate = `${dates[0]} - ${dates[1]}`;
  return formatedDate;
};
