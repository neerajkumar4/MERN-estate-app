import React, { useEffect, useState } from "react";
import { IconButton } from "rsuite";
import { Search } from "@rsuite/icons";
import ArowBackIcon from "@rsuite/icons/ArowBack";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    onClose();
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
      <div className="navbar">
        <Link to="/">
          <h1 className="logoTxt">
            <span className="logo1">Mak</span>
            <span className="logo2">Estate</span>
          </h1>
        </Link>
        <div className="navTabs">
          <IconButton
            className="searchIcon"
            icon={<Search />}
            onClick={onOpen}
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
      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={4}>
            <form className="searchBar" onSubmit={handleSearch}>
              <IconButton
                className="hideSearchIcon"
                icon={<ArowBackIcon />}
                onClick={onClose}
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </form>
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Header;
