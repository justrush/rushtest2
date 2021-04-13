import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This confirms the frontend data pipeline is sound.
        </p>
        <a
          className="App-link"
          href="https://amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ETES is alive
        </a>
      </header>
    </div>
  );
}

export default App;
