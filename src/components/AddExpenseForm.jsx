import ExpenseInput from "./ExpenseInput";
import SelectBar from "./SelectBar";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import calcExpenses from "../helpers/calcExpenses";

const AddExpenseForm = ({ formDisplayHandler, currentExpenses, setCurrentExpenses, setTotalSum }) => {

  const currentTravel = doc(db, "travels", "jwY5m9wy2XdpqhLrNxeu");

  const addExpenseHandler = async () => {
    const newExpenses = [
      ...currentExpenses,
      { id: 9, category: "food", title: "ice creams", price: 4 },
    ];
    await updateDoc(currentTravel, {
      expenses: newExpenses,
    });
    setCurrentExpenses(newExpenses)
    setTotalSum(calcExpenses(newExpenses))
    formDisplayHandler();
  };
  return (
    <div className="ADD-EXPENSE-FORM flex justify-between items-center gap-2">
      <SelectBar
        placeholder="Category"
        options={[
          { value: "food", label: "Food" },
          { value: "transport", label: "Transport" },
          { value: "souvenirs", label: "Souvenirs" },
          { value: "accomodation", label: "Accomodation" },
        ]}
      />
      <ExpenseInput placeholder="Title" />
      <ExpenseInput placeholder="Price" type="number" />
      <CheckButton onClick={addExpenseHandler} />
      <DeleteButton onClick={formDisplayHandler} />
    </div>
  );
};

export default AddExpenseForm;
