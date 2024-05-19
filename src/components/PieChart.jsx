import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";
import calcExpenses from "../helpers/calcExpenses";

ChartJS.register(Tooltip, Legend, ArcElement);
const PieChart = () => {
  const { expenses } = useLoaderData();
  const {
    foodExpenses,
    transportExpenses,
    accomodationExpenses,
    souvenirsExpenses,
  } = calcExpenses(expenses);
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
        backgroundColor: ["#fb923c", "#10b981", "#38bdf8", "#6b21a8"],
        hoverOffset: 4,
      },
    ],
  };
  return <Pie options={options} data={pieData} />;
};

export default PieChart;
