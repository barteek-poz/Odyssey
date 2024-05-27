import ExpenseInput from "./ExpenseInput";
import SelectBar from "./SelectBar";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import calcExpenses from "../helpers/calcExpenses";
import { useState } from "react";

const AddExpenseForm = ({
  formDisplayHandler,
  currentExpenses,
  setCurrentExpenses,
  setTotalSum,
}) => {
  const [categoryValue, setCategoryValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [formError, setFormError] = useState(null);
  const currentTravel = doc(db, "travels", "jwY5m9wy2XdpqhLrNxeu");

  const addExpenseHandler = async () => {
    if (
      categoryValue.trim().length !== 0 &&
      titleValue.trim().length !== 0 &&
      priceValue.trim().length !== 0
    ) {
      const newExpenses = [
        ...currentExpenses,
        {
          id: Date.now(),
          category: categoryValue,
          title: titleValue,
          price: priceValue,
        },
      ];
      await updateDoc(currentTravel, {
        expenses: newExpenses,
      });
      setCurrentExpenses(newExpenses);
      setTotalSum(calcExpenses(newExpenses));
      formDisplayHandler();
      setFormError(false);
    } else setFormError(true);
  };

  return (
    <>
      <div className="ADD-EXPENSE-FORM flex justify-between items-center gap-2">
        <SelectBar
          placeholder="Category"
          options={[
            { value: "food", label: "Food" },
            { value: "transport", label: "Transport" },
            { value: "souvenirs", label: "Souvenirs" },
            { value: "accomodation", label: "Accomodation" },
          ]}
          setCategoryValue={setCategoryValue}
          setFormError={setFormError}
        />
        <ExpenseInput
          placeholder="Title"
          setValue={setTitleValue}
          setFormError={setFormError}
        />
        <ExpenseInput
          placeholder="Price"
          type="number"
          setValue={setPriceValue}
          setFormError={setFormError}
        />
        <CheckButton onClick={addExpenseHandler} />
        <DeleteButton onClick={formDisplayHandler} />
      </div>
      {formError && (
        <p className="FORM-ERROR text-red-600">Please, fill out all fields</p>
      )}
    </>
  );
};

export default AddExpenseForm;
