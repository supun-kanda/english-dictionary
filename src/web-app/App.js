import React from 'react';

// styles
import './App.css';

// components
import Customers from "./components/Customers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Css has been <code>Loaded</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Customers />
    </div>
  );
}

export default App;
