import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [pathname, setPath] = useState(window.location.pathname);

  return (
    <div className="navBar text-light">
      <ul>
        <li>
          <NavLink onClick={() => setPath("/")} to="/">
            <span
              className={
                pathname === "/" ? "lnr lnr-home active" : "lnr lnr-home"
              }
            ></span>
            <span>Home</span>
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink onClick={() => setPath("/aboutMe")} to="/aboutMe">
            <span
              className={
                pathname === "/aboutMe" ? "lnr lnr-user active" : "lnr lnr-user"
              }
            ></span>
            <span>About Me</span>
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink onClick={() => setPath("/resume")} to="/resume">
            <span
              className={
                pathname === "/resume"
                  ? "lnr lnr-graduation-hat active"
                  : "lnr lnr-graduation-hat"
              }
            ></span>
            <span>Resume</span>
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink onClick={() => setPath("/portfolio")} to="/portfolio">
            <span
              className={
                pathname === "/portfolio"
                  ? "menu-icon lnr lnr-briefcase active"
                  : "menu-icon lnr lnr-briefcase"
              }
            ></span>
            <span>Portfolio</span>
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink onClick={() => setPath("/blog")} to="/blog">
            <span
              className={
                pathname === "/blog" ? "lnr lnr-book active" : "lnr lnr-book"
              }
            ></span>
            <span>Blog</span>
          </NavLink>
        </li>
        <hr />
        <li>
          <Link onClick={() => setPath("/contact")} to="/contact">
            <span
              className={
                pathname === "/contact"
                  ? "lnr lnr-envelope active"
                  : "lnr lnr-envelope"
              }
            ></span>
            <span>Contact</span>
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default NavBar;
