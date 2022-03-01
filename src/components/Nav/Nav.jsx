import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss"

function Nav() {
  return (
    <section className="nav">
      <h1>E-commerce Website</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
