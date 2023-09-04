import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpened(false);
  };

  const openForm = () => {
    setIsOpened(true);
  };

  const closeForm = () => {
    setIsOpened(false);
  };
  return (
    <div className="new-expense">
      {isOpened && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          inCancel={closeForm}
        />
      )}
      {!isOpened && <button onClick={openForm}>Add New Expense</button>}

      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    </div>
  );
};

export default NewExpense;
