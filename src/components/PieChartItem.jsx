import { useState } from "react";

const PieChartItem = ({ category, title, price }) => {
  const colorVariants = {
    food: "bg-food",
    souvenirs: "bg-souvenirs",
    transport: "bg-transport",
    accomodation: "bg-accomodation",
  };
  return (
    <div className="CHART-ITEM flex items-center gap-2 duration-300 border-b hover:bg-outlineColor hover:text-white">
      <div className={`w-4 h-4 ${colorVariants[category]}`}></div>
      <p className="text-start mr-4">
        {title[0].toUpperCase() + title.slice(1)}
      </p>
      <p className="ml-auto">- {price}€</p>
    </div>
  );
};

export default PieChartItem;
