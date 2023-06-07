import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import { useState } from "react"

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

  function clickHandler(){
    setTitle("Updated")
  }


  return (
    <Card className="expense-item">
      <Card className="expense-item">
      <ExpenseDate date={props.date} />
      </Card>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <Card className="expense-item__price">
        <h2>${props.amount}</h2>
      </Card>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
