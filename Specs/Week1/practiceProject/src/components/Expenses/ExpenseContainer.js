import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css"
import Card from "../UI/Card";

function ExpenseContainer(props) {
  return (
    <Card className="expenses">
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
