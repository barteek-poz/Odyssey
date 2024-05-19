import PieChart from "./PieChart";
import PieChartInfo from "./PieChartInfo";

const PieChartForm = () => {
  return (
    <div className="CHART-BOX flex justify-center gap-40">
      <div className="CHART lg:w-600 lg:h-600">
        <PieChart />
      </div>
      <div className="CHART-INFO">
        <PieChartInfo />
      </div>
    </div>
  );
};

export default PieChartForm;
