import React, { useState } from "react";

import './App.css';
import NoteMaker from './components/Notes/NoteMaker';
import NoteContainer from "./components/Notes/NoteContainer";

function App() {
  const [note, setnote] = useState([])

  function newNote(noteObject) {
    setnote(prevNote => [...prevNote, noteObject])
  }

  return (
    <div className="App">
      <div className="container">
        <NoteMaker note={newNote}/>
        <NoteContainer notes={note}/>
      </div>
    </div>
  );
}

export default App;
