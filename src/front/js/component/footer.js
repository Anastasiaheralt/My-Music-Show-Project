import React, { Component } from "react";
import IG from "../../img/IG.png";
import FB from "../../img/FB.png";
import TW from "../../img/TW.png";
import "./footer.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center colorfooter">
    <div class="container-fluid d-flex text-center">
      <a class="dropdown-item text-white fw-bolder" href="#">
        <img src={IG} height="25px" /> Instagram
      </a>
      <a class="dropdown-item text-white fw-bolder" href="#">
        <img src={FB} height="25px" /> Facebook
      </a>
      <a class="dropdown-item text-white fw-bolder" href="#">
        <img src={TW} height="25px" /> Twitter
      </a>
    </div>

    <h6 class="text-white mt-2 fw-bolder">
      Desarrollado por MyMusicShow Inc. 2022 - Todos los Derechos Reservados
    </h6>
  </footer>
);
