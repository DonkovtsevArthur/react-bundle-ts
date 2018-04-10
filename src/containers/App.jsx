import React, { Component } from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";



import "../styles/app.css";
import img from '../images/1.jpg';



export default class App extends Component {
  render() {
    return <div className="app">
        <a href=""> My Minimal React 16 Webpack 4 </a>
        <div>
          <img src={img} alt={img} />
        </div>
      </div>;
  }
}
