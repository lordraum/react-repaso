import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProviderPriceContext } from "./contexts/PriceContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderPriceContext>
      <App />
    </ProviderPriceContext>
  </React.StrictMode>
);
