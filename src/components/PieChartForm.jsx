import { useLoaderData } from "react-router-dom";
import PieChart from "./PieChart";
import PieChartInfo from "./PieChartInfo";
import { useState } from "react";

const PieChartForm = () => {
  const {expenseList} = useLoaderData();
  const [currentExpenses, setCurrentExpenses] = useState(expenseList);
  
  return (
    <div className="CHART-BOX flex flex-col lg:flex-row justify-center  lg:px-20 gap-10">
      <div className="CHART mx-auto w-80 lg:m-0 lg:w-600 ">
        <PieChart currentExpenses={expenseList} />
      </div>
      <div className="CHART-INFO">
        <PieChartInfo
          currentExpenses={expenseList}
          setCurrentExpenses={setCurrentExpenses}
        />
      </div>
    </div>
  );
};

export default PieChartForm;
