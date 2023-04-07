import { useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Giphy</h3>
      <nav ref={navRef}>
        <Link to="/">
          <div className="a">Home</div>
        </Link>

        <Link to="/Favourite">
          <div className="a">Favourite</div>
        </Link>

        <Link to="/Login">
          <div className="a">Login</div>
        </Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
