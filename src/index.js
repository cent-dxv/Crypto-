import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import "antd/dist/antd.css";

//redux
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Route>
      <Provider store = { store }>
        <App />
      </Provider>
    </Route>
  </React.StrictMode>
);
