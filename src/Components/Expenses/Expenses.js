import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Cards>
    </>
  );
}

export default Expenses;
