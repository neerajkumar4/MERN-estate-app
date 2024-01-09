import React, { useState } from "react";
import { IconButton } from "rsuite";
import { Search } from "@rsuite/icons";
import ArowBackIcon from "@rsuite/icons/ArowBack";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <header className="header">
      {search ? (
        <form className="searchBar">
          <IconButton
            className="hideSearchIcon"
            icon={<ArowBackIcon />}
            onClick={() => setSearch(!search)}
          />
          <input type="text" placeholder="Search..." />
        </form>
      ) : (
        <div className="navbar">
          <h1 className="logoTxt">
            <span className="logo1">Mak</span>
            <span className="logo2">Estate</span>
          </h1>
          <div className="navTabs">
            <IconButton
              className="searchIcon"
              icon={<Search />}
              onClick={() => setSearch(!search)}
            />
            <ul className="navbarList">
              <Link className="Link homeTab" to="/">
                <li>Home</li>
              </Link>
              <Link className="Link aboutTab" to="/about">
                <li>About</li>
              </Link>
              <Link className="Link" to="/sign-in">
                <li>SignIn</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
