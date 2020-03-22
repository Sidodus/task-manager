import React from "react";
import { Link } from "react-router-dom";
import DISPLAY_CLOCK from "./Clock";

import ReactTooltip from "react-tooltip";

import SidoByMe from "../../SidoByMe.png";

function Header(props) {
  const { branding1, branding2, home, add, about } = props;
  return (
    <div className="container-fluid py-3">
      <nav
        className="navbar navbar-expand-sm bg-primary navbar-dark"
        style={{
          boxShadow:
            "10px 14px 8px 0 rgba(0, 0, 0, 0.2), 10px 16px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <Link to="/" className="navbar-brand mr-auto text-dark">
          <img
            src={SidoByMe}
            alt="Logo"
            className="animated bounceInRight slower"
            style={{ width: "60px" }}
          />{" "}
          <span className="text-warning">{branding1}</span>{" "}
          <span>{branding2}</span>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item pt-4">
            <Link to="/" className="nav-link">
              <i className="fa fa-home" /> {home}
            </Link>
          </li>
          <li className="nav-item pt-4">
            <Link to="/todo/add" className="nav-link">
              <i className="fa fa-tasks" /> {add}
            </Link>
          </li>
          <li className="nav-item pt-4 mr-4">
            <Link to="/todo/about" className="nav-link">
              <i className="fa fa-question-circle" /> {about}
            </Link>
          </li>
          <ReactTooltip />
          <li
            className="nav-item"
            data-tip={new Date().toTimeString().substr(0, 5)}
          >
            <div className="animated bounceInLeft slower">
              <DISPLAY_CLOCK />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
