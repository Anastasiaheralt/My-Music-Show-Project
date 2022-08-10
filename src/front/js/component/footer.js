import React, { Component } from "react";
import IG from "../../img/IG.png";
import FB from "../../img/FB.png";
import TW from "../../img/TW.png";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center bg-light">
    <div class="container-fluid d-flex text-center">
      <a class="dropdown-item text-dark " href="#">
        <img src={IG} height="25px" /> Instagram
      </a>
      <a class="dropdown-item text-dark " href="#">
        <img src={FB} height="25px" /> Facebook
      </a>
      <a class="dropdown-item text-dark " href="#">
        <img src={TW} height="25px" /> Twitter
      </a>
    </div>

    <p class="text-dark mt-2">
      Desarrollado por MyMusicShow Inc. 2022 - Todos los Derechos Reservados
    </p>
  </footer>
);
