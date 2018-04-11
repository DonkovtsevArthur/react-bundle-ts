import React from 'react';
import { Link } from "react-router-dom";

const Menu = ({styleLink}) => (
  <ul>
    <li style={styleLink}>
      <Link to="/">Home</Link>
    </li>
    <li style={styleLink}>
      <Link to="/friendlistapp">FriendListApp</Link>
    </li>
    <li style={styleLink}>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

export default Menu;