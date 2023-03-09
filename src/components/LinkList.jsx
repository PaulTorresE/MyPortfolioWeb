import React from "react";
import NavLinks from "./NavLinks";

const LinkList = () => {
  return (
    <ul className="navbar-nav">
      <NavLinks href="#" content="About Me" />
      <NavLinks href="#" content="Skills" />
      <NavLinks href="#" content="Experiences" />
      <NavLinks href="#" content="Contact Me" />
      <li className="nav-item">
        <a className="nav-link disabled">Blog</a>
      </li>
    </ul>
  );
};

export default LinkList;
