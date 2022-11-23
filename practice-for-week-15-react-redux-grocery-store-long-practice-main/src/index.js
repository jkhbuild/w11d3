import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store/index.js";
import { Provider } from "react-redux";
import { populateProduce } from "./store/produce";

const store = configureStore();


function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

//testing
if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.store = store;
  window.populateProduce = populateProduce;
}
