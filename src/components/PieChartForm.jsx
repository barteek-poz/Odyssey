import { useLoaderData } from "react-router-dom";
import PieChart from "./PieChart";
import PieChartInfo from "./PieChartInfo";

const PieChartForm = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="CHART-BOX flex justify-center gap-40">
     {expenses ? <>
        {" "}
        <div className="CHART lg:w-600 lg:h-600">
          <PieChart />
        </div>
        <div className="CHART-INFO">
          <PieChartInfo />
        </div>
      </> : <span className="underline uppercase">Add here your travel expenses</span>}
    </div>
  );
};

export default PieChartForm;
