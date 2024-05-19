import { useLoaderData } from "react-router-dom";
import PieChartItem from "./PieChartItem";
import calcExpenses from "../helpers/calcExpenses";
const PieChartInfo = () => {
  const { expenses } = useLoaderData();
  const {
    foodExpenses,
    transportExpenses,
    souvenirsExpenses,
    accomodationExpenses,
  } = calcExpenses(expenses);
  console.log(expenses);
  return (
    <div className="CHART-INFO flex flex-col">
      <span className="uppercase underline">Expenses</span>
      <div className="border-b border-b-black mb-1">
        <ul className="CHART-LIST flex flex-col gap-2 my-4">
          {expenses.map((expense) => (
            <PieChartItem
              key={expense.id}
              category={expense.category}
              title={expense.title}
              price={expense.price}
            />
          ))}
        </ul>
      </div>
      <span className="TOTAL ml-auto ">
        Total: - {foodExpenses +
          transportExpenses +
          souvenirsExpenses +
          accomodationExpenses}€
      </span>
    </div>
  );
};

export default PieChartInfo;
