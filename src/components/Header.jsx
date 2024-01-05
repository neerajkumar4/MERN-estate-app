import React from "react";
import {FaSearch} from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <h1 className="logoTxt">
          <span className="logo1">Makaan</span>
          <span className="logo2">Estate</span>
        </h1>
        <form className="searchBar">
            <input type="text" placeholder="Search..." />
            <FaSearch size={30} />
        </form>
        <ul className="navbarList">
          <li>Home</li>
          <li>About</li>
          <li>Sign in</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
