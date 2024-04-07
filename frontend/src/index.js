import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "./index.css";
import "./theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PrimeReactProvider>
  </React.StrictMode>
);
