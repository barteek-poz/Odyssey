import AddButton from "./AddButton";
import ExpenseInput from "./ExpenseInput";
import { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";

const AddExpense = () => {
  const [formOpen, setFormOpen] = useState(false);
  const formDisplayHandler = () => {
    setFormOpen(prevState => !prevState);
  };
  return (
    <div className="ADD-EXPENSE mb-1">
      {!formOpen && <AddButton text="Add expense" onClick={formDisplayHandler} />}
     {formOpen && <AddExpenseForm formDisplayHandler={formDisplayHandler}/>}
    </div>
  );
};

export default AddExpense;
