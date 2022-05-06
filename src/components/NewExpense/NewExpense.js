import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(true);
  };

  const startEditingHandler = () => {
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      <div>
        {isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {!isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </div>
  );
};

export default NewExpense;
