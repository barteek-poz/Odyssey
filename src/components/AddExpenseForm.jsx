import ExpenseInput from "./ExpenseInput";
import SelectBar from "./SelectBar";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";

const AddExpenseForm = ({ formDisplayHandler }) => {
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
      <CheckButton />
      <DeleteButton onClick={formDisplayHandler} />
    </div>
  );
};

export default AddExpenseForm;
