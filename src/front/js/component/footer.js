import React, { Component } from "react";
import VZLA from "../../img/venezuela.png";
import LOGO2 from "../../img/LOGO2.png";
import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white colorfooter">
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link className="textf" to="/">
                  My Music Show
                </Link>
              </h6>
              <p className="texto33">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Proveedores
              </h6>

              <a className="texto33 mb-2">Música</a>
              <br />
              <a className="texto33 mb-2">Fotografía</a>
              <br />
              <a className="texto33 mb-2">Locaciones</a>
              <br />
              <a className="texto33 mb-2">Catering</a>
              <br />
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 texto33">
              <h6 className="text-uppercase mb-4">Utilidades</h6>

              <Link className="texto33 mb-2" to="/login">
                Login
              </Link>
              <br />

              <Link className="texto33 mb-2" to="/register">
                Registrate
              </Link>
              <br />

              <a className="texto33 mb-2">Blog</a>
              <br />

              <a className="texto33 mb-2">Nosotros</a>
              <br />
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 texto33">
              <h6 className="text-uppercase mb-3 font-weight-bold">Contacto</h6>
              <h6>
                <i className="fas fa-home mr-3"></i> Caracas, 1053,
                <img src={VZLA} height="18px" /> Venezuela
              </h6>
              <h6>
                <i className="fas fa-envelope mr-3"></i> mymusicshowve@gmail.com
              </h6>
              <h6>
                <i className="fas fa-phone mr-3"></i> + 58 (412) 2473 151
              </h6>
              <h6>
                <i className="fas fa-print mr-3"></i> + 58 (424) 137 5726
              </h6>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-2 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 col-lg-6 text-center text-md-start">
              <div className="p-3">
                © 2022 Copyright:
                <a className="texto33 px-3" href="#">
                  REJD Develoment Inc.
                </a>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 text-center text-md-start">
              <img src={LOGO2} height="80px" />
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="text-white btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="text-white btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="text-white btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="text-white btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
