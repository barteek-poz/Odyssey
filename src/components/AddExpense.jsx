import AddButton from "./AddButton";
import { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";


const AddExpense = ({ currentExpenses, setCurrentExpenses, setTotalSum }) => {
  const [formOpen, setFormOpen] = useState(false);
  const formDisplayHandler = () => {
    setFormOpen((prevState) => !prevState);
  };
  return (
    <div className="ADD-EXPENSE mb-1">
      {!formOpen && (
        <AddButton text="Add expense" onBtnClick={formDisplayHandler} />
      )}
      {formOpen && (
        <AddExpenseForm
          formDisplayHandler={formDisplayHandler}
          currentExpenses={currentExpenses}
          setCurrentExpenses={setCurrentExpenses}
          setTotalSum={setTotalSum}
        />
      )}
    </div>
  );
};

export default AddExpense;
