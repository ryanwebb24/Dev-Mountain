import React from 'react'

function Note(props) {
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.note}</p>
      <p>{props.date}</p>
    </div>
  )
}

export default Note