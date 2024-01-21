import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../src/styles/style.css'

ReactDOM.createRoot(
  document.querySelector("#app")
).render(
  <StrictMode>
    <App />
  </StrictMode>
)