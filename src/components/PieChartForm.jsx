import { useLoaderData } from "react-router-dom";
import PieChart from "./PieChart";
import PieChartInfo from "./PieChartInfo";
import { useState } from "react";

const PieChartForm = () => {
  const { expenses } = useLoaderData();
  const [currentExpenses, setCurrentExpenses] = useState(expenses);
  return (
    <div className="CHART-BOX flex justify-center gap-40 px-20 mb-32">
        <div className="CHART lg:w-600 lg:h-600">
          <PieChart currentExpenses={currentExpenses} />
        </div>
        <div className="CHART-INFO">
          <PieChartInfo currentExpenses={currentExpenses} setCurrentExpenses={setCurrentExpenses} />
        </div>
    
    </div>
  );
};

export default PieChartForm;
