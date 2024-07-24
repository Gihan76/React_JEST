import logo from './logo.svg';
import './App.css';
import { Counter } from './counter/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter initialCount={5} />
      </header>
    </div>
  );
}

export default App;
