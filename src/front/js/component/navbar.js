import React from "react";
import "./navbar.css";
import LOGO from "../../img/LOGO.png";
import { useScrollPosition } from "./../hooks/useScrollPosition";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`navbar navbar-expand fixed-top
    ${
      scrollPosition > 200
        ? "shadow-lg shadow-lg bg-dark bg-opacity-25"
        : "bg-*"
    }`}
      id="navs"
    >
      <div className="container-fluid">
        <a className="navbar-brand text-dark fw-bolder" href="#">
          <img src={LOGO} alt="logom" width="50" />
          My Music Show 🎶
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item mx-3">
              <a className="nav-link text-dark fw-bolder" href="#">
                Música
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark fw-bolder" href="#">
                Fotografía
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark fw-bolder" href="#">
                Locaciones
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark fw-bolder" href="#">
                Catering
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <a className="nav-link text-dark fw-bolder" href="#">
              Registrate
            </a>
            <a className="nav-link text-dark fw-bolder" href="#">
              Inicia sesion
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};
