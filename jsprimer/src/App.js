import React from 'react';
import logo from './logo.svg';
import './App.css';
import sumOdds, { sumValues } from "./Modules/sum";
import { multiply, subtract } from "./Modules/Operations";

let values = [10, 20, 30, 40, 50];

let total = sumValues(values);
let odds = sumOdds(values);

console.log(`Total: ${total}, Odd Total: ${odds}`);
console.log(`Multiply: ${multiply(values)}`);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
