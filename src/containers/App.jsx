import React, { Component } from "react";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import FriendListApp from "./FriendListApp";
import * as reducers from "../reducers";


import "../styles/app.css";
import img from '../images/1.jpg';


const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return <div className="app">
        <Provider store={store} >
          <FriendListApp />
        </Provider>
      </div>;
  }
}
