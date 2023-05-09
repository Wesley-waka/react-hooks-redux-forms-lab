import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import BandInput from "./features/bands/BandInput";
import BandsContainer from "./features/bands/BandsContainer";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <BandInput />
    <BandsContainer />
  </Provider>,
  document.getElementById("root")
);
