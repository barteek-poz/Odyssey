const calcExpenses = (expenses) => {
  
  if (expenses) {
    const foodExpenses = expenses
      .filter((expense) => expense.category === "FOOD")
      .map((expense) => Number(expense.amount))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    const transportExpenses = expenses
      .filter((expense) => expense.category === "TRANSPORT")
      .map((expense) => Number(expense.amount))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    const accomodationExpenses = expenses
      .filter((expense) => expense.category === "ACCOMODATION")
      .map((expense) => Number(expense.amount))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    const souvenirsExpenses = expenses
      .filter((expense) => expense.category === "SOUVENIRS")
      .map((expense) => Number(expense.amount))
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
