
import './App.css';
import React, {useState} from 'react';
import Child from './Child'

function App() {
  const [input, setInput] = useState("")
  return (
    <div className="App">
      <h1>App Component</h1>
      <Child userInput={input}/>
      <input
        type="text"
        placeholder="Type Something Cool"
        onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default App;
