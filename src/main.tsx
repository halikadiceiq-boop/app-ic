import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import { FeatureFlagProvider } from "./flags/FeatureFlagProvider";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FeatureFlagProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FeatureFlagProvider>
  </React.StrictMode>,
);
