import React, { useEffect, useState } from "react";
import { IconButton } from "rsuite";
import { Search } from "@rsuite/icons";
import ArowBackIcon from "@rsuite/icons/ArowBack";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const query = urlParams.toString();
    navigate(`search?${query}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [window.location.search]);
  return (
    <header className="header">
      {search ? (
        <form className="searchBar" onSubmit={handleSearch}>
          <IconButton
            className="hideSearchIcon"
            icon={<ArowBackIcon />}
            onClick={() => setSearch(!search)}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
              {currentUser ? (
                <Link to="/profile">
                  <li>
                    <img
                      className="rounded-full h-10 w-10  object-cover"
                      src={currentUser?.avatar}
                      alt="profile"
                    />
                  </li>
                </Link>
              ) : (
                <Link className="Link" to="/profile">
                  <li>SignIn</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
