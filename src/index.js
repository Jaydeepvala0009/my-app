import React from "react";
import { StrictMode } from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
