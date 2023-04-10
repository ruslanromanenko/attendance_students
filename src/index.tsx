import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import store from "store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
