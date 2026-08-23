import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./vendor/normalize.css";
import "./index.css";
import App from "./App.jsx";

const redirectedRoute = new URLSearchParams(window.location.search).get("route");
const basePath = import.meta.env.BASE_URL;

if (redirectedRoute) {
  const routePath = redirectedRoute.replace(/^\//, "");
  window.history.replaceState(null, "", `${basePath}${routePath}`);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basePath}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
