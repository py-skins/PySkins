import React from "react";
import ReactDOM from "react-dom/client";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-dark-amber/theme.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import { PrimeReactProvider } from "primereact/api";

// import "primeflex/primeflex.css";
import "./index.css";

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
