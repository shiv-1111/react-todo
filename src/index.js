import React from "react";
import ReactDOM from "react-dom/client";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);
