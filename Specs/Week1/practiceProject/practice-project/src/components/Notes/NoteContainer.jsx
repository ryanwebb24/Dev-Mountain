import React from 'react'
import Note from "./Note"

function NoteContainer(props) {
  return (
    <div>
      {props.notes.map(singleNote => <Note title={singleNote.title} note={singleNote.note} date={singleNote.date}/>)}
    </div>
  )
}

export default NoteContainer