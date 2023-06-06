
import './App.css';
import Square from './components/Square';

function App() {
  const propVar = 12
  return (
    <div className="App">
      <Square num={propVar}/>
    </div>
  );
}

export default App;
