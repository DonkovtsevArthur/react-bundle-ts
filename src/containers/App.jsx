import React, { Component } from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import FriendListApp from "./FriendListApp";

import addFriend from "../reducers";

import "../styles/app.css";

const store = createStore(addFriend);

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
