import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Nav change on scroll

  return (
    <nav className="navbar sticky">
      <span className="logo">
        <Link to="/">Pragat Vyawahare</Link>
      </span>
      <ul className="nav__links">
        <li className="nav__link">
          <Link to="about">About Me</Link>
        </li>
        <li className="nav__link">
          <Link to="services">Services</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
