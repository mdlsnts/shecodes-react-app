import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";
import styles from "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather Search Engine</h1>
    <Weather />
  </React.StrictMode>
);
