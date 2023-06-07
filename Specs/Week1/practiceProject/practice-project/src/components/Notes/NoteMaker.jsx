import React, { useState }from "react"
import "./NoteMaker.css"

function NewNote(props) {
  const [date, setDate] = useState("")
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  
  function dateChangeHandler (event) {
    setDate(event.target.value)
  }
  function titleChangeHandler (event) {
    setTitle(event.target.value)
  }
  function noteChangeHandler (event) {
    setNote(event.target.value)
  }
  function submitHandler (event) {
    event.preventDefault()
    let newNote = {
      date,
      title,
      note
    }
    props.note(newNote)
    setDate("")
    setTitle("")
    setNote("")
  }
  
  return (
    <form onSubmit={submitHandler}>
        <div className="date">
            <label>Date</label>
            <input type="date" value={date} onChange={dateChangeHandler}/>
        </div>
        <div className="title">
            <label>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler}/>
        </div>
        <div className="note">
            <textarea value={note} onChange={noteChangeHandler}></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default NewNote