const sortTravels = (travelsArr) => {
  const sortedTravels = travelsArr.sort((travel1, travel2) => travel2.date[0].replaceAll('-', '') - travel1.date[0].replaceAll('-', ''));
  return sortedTravels
};

export default sortTravels;
