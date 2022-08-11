import React from "react";
import "./navbar.css";
import PLAY from "../../img/play.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md fixed-top colornav">
      <div class="container-fluid">
        <a class="navbar-brand text-white fw-white" href="#">
          <img src={PLAY} alt="" width="40" />
          <strong>MyMusicShow</strong>
        </a>
        <button
          class="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-1 mb-lg-0">
            <li class="nav-item mx-3">
              <a class="nav-link text-white fw-bolder" href="#">
                Música
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link text-white fw-bolder" href="#">
                Fotografía
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link text-white fw-bolder" href="#">
                Locaciones
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <a class="nav-link text-white fw-bolder" href="#">
              Registrate
            </a>
            <a class="nav-link text-white fw-bolder" href="#">
              Inicia sesion
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};
