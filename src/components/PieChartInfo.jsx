import { useLoaderData } from "react-router-dom";
import PieChartItem from "./PieChartItem";
import calcExpenses from "../helpers/calcExpenses";
import AddExpense from "./AddExpense";
const PieChartInfo = () => {
  const { expenses } = useLoaderData();
  const {
    foodExpenses,
    transportExpenses,
    souvenirsExpenses,
    accomodationExpenses,
  } = calcExpenses(expenses);
  return (
    <div className="CHART-INFO flex flex-col min-w-400">
      <span className="uppercase underline">Expenses</span>
      <div className="border-b border-b-black mb-1">
        <ul className="CHART-LIST flex flex-col gap-2 mt-4 mb-2">
          {expenses.map((expense) => (
            <PieChartItem
              key={expense.id}
              category={expense.category}
              title={expense.title}
              price={expense.price}
            />
          ))}
        </ul>
        <AddExpense />
      </div>
      <span className="TOTAL ml-auto ">
        Total: -{" "}
        {foodExpenses +
          transportExpenses +
          souvenirsExpenses +
          accomodationExpenses}
        €
      </span>
    </div>
  );
};

export default PieChartInfo;
