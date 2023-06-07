
import ExpenseContainer from "./components/Expenses/ExpenseContainer";
import NewExpense from "./components/NewExpense/NewExpense"
import { useState } from "react"

let dummyExpenses = [
  {
    id: 1,
    title: "car insurance",
    amount: 150,
    date: new Date(2023, 5, 28)
  },
  {
    id: 2,
    title: "rent",
    amount: 1520,
    date: new Date(2023, 6, 1)
  },
  {
    id: 3,
    title: "phone",
    amount: 84.67,
    date: new Date(2023, 6, 4)
  }
]

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses)
  
  function  NewExpenseDataHandler(expenseData) {
    // setExpenses((prevExpenses) => {
    //   return [expenses, ...prevExpenses]
    // })
    console.log(expenseData);
  }

  return (
    <div>
      <NewExpense onNewExpenseData={NewExpenseDataHandler} />
      <ExpenseContainer expenses={expenses} />
    </div>
  );
}

export default App;
