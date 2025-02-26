import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import Styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={Styles.head}>
      <nav className={Styles.navbar}>
        {/* Logo */}
        <h1>Vs</h1>

        {/* Desktop Menu */}
        <ul className={Styles.navlinks}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Back</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className={Styles.menuicon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className={Styles.mobilemenu}>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/users" onClick={() => setMenuOpen(false)}>Users</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Back</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
