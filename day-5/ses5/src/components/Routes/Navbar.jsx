import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-3">
            <h1>Prashant</h1>
          </div>
          <div className="col-3"></div>

          <div className="col-6">
            <ul className="nav justify-content-center  ">
              <li className="nav-item">
                <NavLink className="nav-link" to="home" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="fromhanding">
                  From Handing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="service">
                  Service
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
