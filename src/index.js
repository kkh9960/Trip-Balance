import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux/es";
import store from "./redux/config/ConfigStore";

ReactModal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
