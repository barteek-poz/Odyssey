import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import calcExpenses from "../helpers/calcExpenses";
import NoExpenses from "./NoExpenses";

ChartJS.register(Tooltip, Legend, ArcElement);
const PieChart = ({ currentExpenses }) => {
  const {
    foodExpenses,
    transportExpenses,
    accomodationExpenses,
    souvenirsExpenses,
  } = calcExpenses(currentExpenses);
  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "middle",
        onClick: (e) => {
          e.stopPropagation();
        },
        labels: {
          boxWidth: 16,
          boxHeight: 16,
        },
      },
      maintainAspectRatio: false,
    },
  };
  const pieData = {
    labels: ["Food", "Transport", "Souvenirs", "Accomodation"],
    datasets: [
      {
        data: [
          foodExpenses,
          transportExpenses,
          souvenirsExpenses,
          accomodationExpenses,
        ],
        backgroundColor: ["#fb923c", "#10b981", "#6366f1", "#f43f5e"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      {currentExpenses.length !== 0 ? (
        <Pie options={options} data={pieData} />
      ) : (
        <NoExpenses />
      )}
    </>
  );
};

export default PieChart;
