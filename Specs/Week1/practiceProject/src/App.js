
import ExpenseContainer from "./components/Expenses/ExpenseContainer";

function App() {
  let expenses = [
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
      id: 4,
      title: "phone",
      amount: 84.67,
      date: new Date(2023, 6, 4)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseContainer expenses={expenses}></ExpenseContainer>
    </div>
  );
}

export default App;
