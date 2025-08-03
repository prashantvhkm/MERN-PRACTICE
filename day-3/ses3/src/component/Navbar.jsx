import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav justify-content-center  ">
        <NavLink className="nav-link" to="home" aria-current="page">
          Home
        </NavLink>
        <NavLink className="nav-link" to="about">
          About
        </NavLink>
        <NavLink className="nav-link" to="usestate">
          UseState
        </NavLink>
        <NavLink className="nav-link" to="listrendeing">
          List Rendeing
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
