export const homepageTravels = (windowWidth) => {
  if (windowWidth > 2350) {
    return 4;
  } else if (windowWidth < 2350 && windowWidth > 1650) {
    return 3;
  } else if (windowWidth < 1650) {
    return 2;
  } else return 2;
};


