import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";

import Menu from "./Menu";
import FriendListApp from "../containers/FriendListApp";
import FriendsName from "../components/FriendsName";

import "../styles/app.css";



const App = ({ store }) => {
  const styleLink = { listStyleType: "none" };
  return <Provider store={store}>
      <Router>
        <div className="app">
          <Menu styleLink={styleLink} />
          <hr />
          <Route path="/friend" component={FriendListApp} />
        
          <Route path="/about-friend/:id" component={FriendsName} />
        </div>
      </Router>
    </Provider>;
};

export default App;
