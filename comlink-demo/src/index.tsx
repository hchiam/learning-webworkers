import React from 'react';
import { render } from "react-dom";
import MyWebWorker from "./worker.js";

function runWebWorker() {
  const worker = new MyWebWorker();
  alert(`Counter: ${worker.counter}`);
  worker.increment();
  alert(`Counter: ${worker.counter}`);
}

import "./styles.css";

function App() {
  runWebWorker();
  return (
    <div className="App">
      <p>
        React + <code>comlink</code> demo
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
