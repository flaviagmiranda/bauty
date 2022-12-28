import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="link">
          <Link to="/" style={{ textDecoration: 'none', color: '#172A3A' }}>Home</Link>
        </li>
        <li className="link">
          <Link to="/blogs" style={{ textDecoration: 'none', color: '#172A3A' }}>Products</Link>
        </li>
        <li className="link">
          <Link to="/contact" style={{ textDecoration: 'none', color: '#172A3A'}}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;