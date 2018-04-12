import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ styleLink }) => {
  return (
    <ul>
      <li style={styleLink}>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li style={styleLink}>
        <NavLink to="/friend">FriendListApp</NavLink>
      </li>
      <li style={styleLink}>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
