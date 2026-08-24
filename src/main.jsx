import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./vendor/normalize.css";
import "./index.css";
import App from "./App.jsx";

const redirectedRoute = new URLSearchParams(window.location.search).get("route");

if (redirectedRoute) {
  window.history.replaceState(null, "", redirectedRoute);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
