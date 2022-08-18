import React from "react";
import "./login.css";
import LOGOR from "./../../img/LOGOR.png";
import { Footer } from "./footer";

export const Login = () => {
  return (
    <>
      <div className="d-flex vh-100 w-100">
        <div className="col-6 log1 align-middle text-center">
          <div className="align-middle mt-5">
            <img
              className="img-fluid pt-5"
              src={LOGOR}
              height="400px"
              width="400px"
            />
          </div>
        </div>

        <div className="col-6 log2 p-5">
          <div className="container-fluid text-center mt-5">
            <h1>LOGIN</h1>
          </div>

          <form>
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example1">
                Username/Email
              </label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example2">
                Password
              </label>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
              />
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                  <label className="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">¿olvidaste tu contraseña?</a>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-dark btn-block mb-4"
                id="boton"
              >
                Iniciar sesión
              </button>
            </div>

            <div className="text-center">
              <p>
                ¿Aún no eres miembro? <a href="#!">Regístrate</a>
              </p>
              <p>tambien puedes acceder con:</p>
              <button type="button" className="btn btn-white btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-white btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-white btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-white btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
