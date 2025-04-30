import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./utils/i18n.ts";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { LocaleProvider } from "./contexts/LocaleContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocaleProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LocaleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
