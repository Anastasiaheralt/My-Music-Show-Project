import React from "react";
import "./navbar.css";
import PLAY from "../../img/play.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bolder" href="#">
          <img src={PLAY} alt="" width="40" />
          <strong>MyMusicShow</strong>
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
              <a className="nav-link text-white fw-bolder" href="#">
                Música
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fw-bolder" href="#">
                Fotografía
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fw-bolder" href="#">
                Locaciones
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <a className="nav-link  fw-bolder" href="#">
              Registrate
            </a>
            <a className="nav-link  fw-bolder" href="#">
              Inicia sesion
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};
