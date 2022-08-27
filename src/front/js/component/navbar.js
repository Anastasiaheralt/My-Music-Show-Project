import React, { useContext } from "react";
import "./navbar.css";
import LOGO from "../../img/LOGO.png";
import { useScrollPosition } from "./../hooks/useScrollPosition";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top
    ${scrollPosition > 100 ? "shadow-lg shadow-lg colornav" : "bg-*"}`}
      id="navs"
    >
      <div className="container-fluid align-middle ">
        <Link className="navbar-brand texto-borde" to="/">
          <img src={LOGO} alt="logom" width="50" />
          My Music Show
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
          <span className="material-symbols-outlined text-white">menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item mx-1 d-flex">
              <Link className="nav-link texto2" to="/">
                Música{" "}
              </Link>
              <span className="material-symbols-outlined pt-3 text-white">
                music_note
              </span>
            </li>
            <li className="nav-item mx-1 d-flex">
              <Link className="nav-link texto2" to="/">
                Fotografía{" "}
              </Link>
              <span className="material-symbols-outlined pt-3 text-white">
                photo_camera
              </span>
            </li>
            <li className="nav-item mx-1 d-flex">
              <Link className="nav-link texto2" to="/">
                Locaciones{" "}
              </Link>
              <span className="material-symbols-outlined pt-3 text-white">
                location_city
              </span>
            </li>
            <li className="nav-item mx-1 d-flex">
              <Link className="nav-link texto2" to="/">
                Catering{" "}
              </Link>
              <span className="material-symbols-outlined pt-3 text-white">
                tapas
              </span>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {!store.token ? (
              <>
                <Link className="nav-link texto3" to="/register">
                  Registrate
                </Link>
                <Link className="nav-link texto3 align-middle" to="/login">
                  Inicia sesión
                </Link>
              </>
            ) : (
              <>
                <Link className="btn btn-link texto3 " to="/userPage">
                  {store.user && store.user.name}
                </Link>
                <span className="material-symbols-outlined text-white pt-2 ">
                  account_circle
                </span>
                <button
                  className="btn btn-link texto3"
                  onClick={() => actions.logout()}
                >
                  Cerrar sesión
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};
