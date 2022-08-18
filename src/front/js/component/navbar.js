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
    ${scrollPosition > 200 ? "shadow-lg shadow-lg bg-light " : "bg-*"}`}
      id="navs"
    >
      <div className="container-fluid">
        <Link className="navbar-brand texto-borde" to="/">
          <img src={LOGO} alt="logom" width="50" />
          My Music Show 🎶
        </Link>
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
              <Link className="nav-link text-dark fw-bolder" to="/">
                Música
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark fw-bolder" to="/">
                Fotografía
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark fw-bolder" to="/">
                Locaciones
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark fw-bolder" to="/">
                Catering
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="nav-link text-dark fw-bolder" to="/">
              Registrate
            </Link>
            <Link className="nav-link text-dark fw-bolder" to="/login">
              Inicia sesion
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
