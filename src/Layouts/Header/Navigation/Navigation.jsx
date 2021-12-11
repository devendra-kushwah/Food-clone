import React from "react";
import StyledNav from "./style";
import { Close } from "@styled-icons/evil/Close";
import { Link } from "react-router-dom";

function Navigation(props) {
  const { closemenu, className } = props;
  return (
    <StyledNav
      className={`fixed-top w-100 havbar justify-content-center ${className}`}
    >
      <button
        onClick={closemenu}
        className="close-menu bg-white fixed-top position-absolute"
      >
        <Close size="30"></Close>
      </button>
      <ul className={`list-unstyled nav-bar ${className}`}>
        <li className="mb-2 ">
          <Link to="/log-in">Edit Profile</Link>
        </li>
        <li className="mb-2">
          <Link to="/log-in">Privacy</Link>
        </li>
        <li className="mb-2">
          <Link to="/log-in">Log out</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Navigation;
