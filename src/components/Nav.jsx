import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/aboutme" className="site-title">
          <div className="color-burgundy">Miguel&nbsp;</div>
          <div>Franganito</div>
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) => (isActive ? "color-burgundy" : "")}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "color-burgundy" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/volunteering"
              className={({ isActive }) => (isActive ? "color-burgundy" : "")}
            >
              Volunteering
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
