import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

function NewExpense (props) {
    function saveExpenseDataHandler (expenseData){
        const newExpenseData = {
            ...expenseData,
            id: (Math.floor(Math.random() * 10)).toString()
        }
        props.onNewExpenseData(newExpenseData)
    }

    return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense