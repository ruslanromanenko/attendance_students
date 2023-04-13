import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";
import store from "store/store";
import { PageRoutes } from "./types/enums/PageRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
