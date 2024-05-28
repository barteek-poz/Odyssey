const calcExpenses = (expenses) => {
  if (expenses) {
    const foodExpenses = expenses
      .filter((expense) => expense.category === "food")
      .map((expense) => Number(expense.price))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    const transportExpenses = expenses
      .filter((expense) => expense.category === "transport")
      .map((expense) => Number(expense.price))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    const accomodationExpenses = expenses
      .filter((expense) => expense.category === "accomodation")
      .map((expense) => Number(expense.price))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    const souvenirsExpenses = expenses
      .filter((expense) => expense.category === "souvenirs")
      .map((expense) => Number(expense.price))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    return {
      foodExpenses,
      transportExpenses,
      accomodationExpenses,
      souvenirsExpenses,
    };
  } else {
    return {
      foodExpenses: 0,
      transportExpenses:0,
      accomodationExpenses:0,
      souvenirsExpenses:0,
    };
  }
};

export default calcExpenses;
