import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./App/Layout/style.css";
import "react-calendar/dist/Calendar.css";
import App from "./App/Layout/App";
import reportWebVitals from "./reportWebVitals";
import { store, StoreContext } from "./App/stores/store";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreContext.Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
