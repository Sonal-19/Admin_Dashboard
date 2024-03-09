import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch,faUser,faSignOutAlt,faBell,} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../Images/logo2.png";
import pp1 from "../Images/pp1.jpg"
import { NavDropdown } from "react-bootstrap";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [notificationCount] = useState(3);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    const matchedRoute = findMatchingRoute(searchInput);
    if (matchedRoute) {
      navigate(matchedRoute);
    }
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchInput(searchText);

    const newSuggestions = getSuggestions(searchText);
    setSuggestions(newSuggestions);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSearchIconClick = () => {
    handleSearch();
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(suggestion.route);
    setSearchInput("");
    setSuggestions([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  };

  // Function to find the matching route
  const findMatchingRoute = (searchText) => {
    const lowerCaseSearch = searchText.toLowerCase();
    const routes = [
      "/",
      "/account",
      "/adminadd",
      "/adminlist",
      "/adduser",
      "/userlist",
      "/todo",
      "/addproduct",
      "/productlist",
      "/privacypolicy",
      "/termsconditions",
      "/termsuse",
      "/bloglist",
      "/contactlist",
      
    ];
    for (const route of routes) {
      if (route.includes(lowerCaseSearch)) {
        return route;
      }
    }
    return null;
  };

  const getSuggestions = (searchText) => {
    const lowerCaseSearch = searchText.toLowerCase();
    const matchedSuggestions = [];

    const routes = [
      { route: "/", label: "Dashboard" },
      { route: "/account", label: "Account" },
      { route: "/addadmin", label: "Add Admin" },
      { route: "/adminlist", label: "Admin List" },
      { route: "/adduser", label: "Add User" },
      { route: "/userlist", label: "User List" },
      { route: "/addproduct", label: "Add Product" },
      { route: "/productlist", label: "Product List" },
      { route: "/addblog", label: "Add Blog" },
      { route: "/list", label: "Blog List" },
      { route: "/todo", label: "Todo List" },
      { route: "/privacypolicy", label: "Privacy Policy" },
      { route: "/termsconditions", label: "Terms and Conditions" },
      { route: "/termsuse", label: "Terms of Use" },
      { route: "/contactlist", label: "Contact List" },
     
    ];

    for (const route of routes) {
      if (route.label.toLowerCase().includes(lowerCaseSearch)) {
        matchedSuggestions.push(route);
      }
    }

    return matchedSuggestions;
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border shadow fixed-top mb-0 mt-0">
        <div className="container-fluid d-flex align-items-center mb-0 pb-0 mt-0 pt-0">
          <div className="m-2 pe-2">
            <Link to="/">
              <img src={logo1} alt="logo1" className="logo me-5" />
            </Link>
          </div>

          <div className="d-flex align-items-center position-relative">
            {/* Search Input */}
            <form ref={searchRef} className="me-3" onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <input
                  className="form-control bg-light"
                  type="text"
                  placeholder={searchInput ? "" : "Search for..."}
                  value={searchInput}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                />
                <span
                  className="input-group-text cursor-pointer"
                  onClick={handleSearchIconClick}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>

              {/* Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <div className="dropdown-menu show">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion.route}
                      className="dropdown-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.label}
                    </button>
                  ))}
                </div>
              )}
            </form>

            <div className="me-3 cursor-pointer">
              <NavDropdown title={
                <div>
                  <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.6rem' }} />
                  {notificationCount > 0 && (
                    <span className="badge bg-danger position-absolute translate-middle" style={{ fontSize: '0.49rem' }}>
                      {notificationCount}
                    </span>
                  )}
                </div>
              }>
                <NavDropdown.Item>
                  <div>New notifications</div>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            
              
              {/* Admin Dropdown */}
              <div className="dropdown">
                <img
                  src={pp1} alt="pp1"
                  className="img-thumbnail dropdown-toggle  me-3 cursor-pointer"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  onClick={handleDropdownToggle}
                />
                <div
                  className={`dropdown-menu dropNav mt-3 ${
                    dropdownVisible ? "show" : ""
                  }`}
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/account" className="dropdown-item">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "19px",
                      }}
                    />
                    Account
                  </Link>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "19px",
                      }}
                    />
                    Logout
                  </button>
                </div>
              </div>
              <div>
                <h4 className="font-monospace text-bold text-center me-5">
                  Sonal
                </h4>
              </div>
          </div>
    
        </div>
      </nav>
    </>
  );
}

export default Navbar;
