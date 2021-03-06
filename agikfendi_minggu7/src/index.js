import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import MainReducer from "./reducers/MainReducer";
import './index.css';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from "./serviceWorker";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(MainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();