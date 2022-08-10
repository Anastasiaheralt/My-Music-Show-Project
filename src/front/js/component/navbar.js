import React from "react";
import PLAY from "../../img/play.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand text-dark" href="#">
          <img src={PLAY} alt="" width="40" />
          PlayEvent!
        </a>
        <button
          class="navbar-toggler text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-dark mx-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Proveedores
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item text-dark" href="#">
                    Musica
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-dark" href="#">
                    Fotografia y Video
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-dark" href="#">
                    Locaciones
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item"></li>
          </ul>
          <form class="d-flex" role="search">
            <a class="nav-link text-dark" href="#">
              Registrate
            </a>
            <a class="nav-link text-dark" href="#">
              Inicia sesion
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};
