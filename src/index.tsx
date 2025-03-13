import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { DateTimeLocalizationProvider } from "./utils/dateTime";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DateTimeLocalizationProvider>
      <App />
    </DateTimeLocalizationProvider>
  </React.StrictMode>
);
