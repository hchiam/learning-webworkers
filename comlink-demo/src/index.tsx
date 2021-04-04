import * as React from "react";
import { render } from "react-dom";
import HelloWorker from "./hello.worker.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

const helloWorker = new HelloWorker();
let messageCount = 0;

helloWorker.postMessage({ run: true });

helloWorker.onmessage = event => {
  if (event.data.status) {
    console.log("STATUS", event.data.status);
  }

  if (event.data.message) {
    messageCount += 1;
    console.log("MESSAGE", event.data.message);

    if (messageCount >= 5) {
      helloWorker.postMessage({ run: false });
    }
  }
};
