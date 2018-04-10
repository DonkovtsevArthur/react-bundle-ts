import React, { Component } from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import FriendListApp from "./FriendListApp";

import addFriend from "../reducers";

import "../styles/app.css";

const store = createStore(
  addFriend,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}
