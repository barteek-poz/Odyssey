import { useLoaderData } from "react-router-dom";
import PieChartItem from "./PieChartItem";
import calcExpenses from "../helpers/calcExpenses";
import AddExpense from "./AddExpense";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";

const PieChartInfo = ({ currentExpenses, setCurrentExpenses }) => {
  const [totalSum, setTotalSum] = useState(() => calcExpenses(currentExpenses));
  const currentTravel = doc(db, "travels", "jwY5m9wy2XdpqhLrNxeu");
  
  const deleteExpenseHandler = async (id) => {
    const newExpenses = currentExpenses?.filter((expense) => expense.id !== id);
    await updateDoc(currentTravel, {
      expenses: newExpenses,
    });
    setCurrentExpenses(newExpenses);
    setTotalSum(() => calcExpenses(newExpenses));
  };
  return (
    <div className="CHART-INFO flex flex-col min-w-400">
      <span className="uppercase underline">Expenses</span>
      <div className="border-b border-b-black mb-1">
        <ul className="CHART-LIST flex flex-col gap-2 mt-4 mb-2">
          {currentExpenses?.map((expense) => (
            <PieChartItem
              key={expense.id}
              id={expense.id}
              category={expense.category}
              title={expense.title}
              price={expense.price}
              deleteExpenseHandler={deleteExpenseHandler}
            />
          ))}
        </ul>
        <AddExpense
          currentExpenses={currentExpenses}
          setCurrentExpenses={setCurrentExpenses}
          setTotalSum={setTotalSum}
        />
      </div>
      <span className="TOTAL ml-auto">
        Total: -
        {totalSum
          ? totalSum.foodExpenses +
            totalSum.transportExpenses +
            totalSum.souvenirsExpenses +
            totalSum.accomodationExpenses
          : 0}
        €
      </span>
    </div>
  );
};

export default PieChartInfo;
