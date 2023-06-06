import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"
import { useState } from "react";

function ExpenseContainer(props) {
  const [filteredYear, setFilteredYear] = useState("2023")

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseContainer;
