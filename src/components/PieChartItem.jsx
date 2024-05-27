import DeleteButton from "./DeleteButton";

const PieChartItem = ({ id, category, title, price, deleteExpenseHandler }) => {
  const colorVariants = {
    food: "bg-food",
    souvenirs: "bg-souvenirs",
    transport: "bg-transport",
    accomodation: "bg-accomodation",
  };
  return (
    <div className="CHART-ITEM group flex items-center border-b  justify-between gap-2 hover:bg-gray-200">
      <div className={`w-4 h-4 ${colorVariants[category]}`}></div>
      <p className="text-start mr-4">
        {title[0].toUpperCase() + title.slice(1)}
      </p>
      <p className="ml-auto">- {price}€</p>
      <DeleteButton
        display="invisible"
        onClick={() => {
          deleteExpenseHandler(id);
        }}
      />
    </div>
  );
};

export default PieChartItem;
