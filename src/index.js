import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./context/resultContextProvider";
import App from "./App";
import "./global.css";

ReactDom.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
