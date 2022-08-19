import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export const Registerclient = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center h-75 mb-5">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black border border-0">
            <div className="card-body p-md-5 border border-0">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <h2 className="text-center mb-4">Registro para clientes</h2>

                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c12"
                          className="form-control borde"
                          placeholder="Nombre"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example3c12"
                          className="form-control borde"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c12"
                          className="form-control borde"
                          placeholder="Contraseña"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd12"
                          className="form-control borde"
                          placeholder="Repite la Contraseña"
                        />
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2 borde"
                        type="checkbox"
                        value=""
                        id="form2Example3c12"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example32"
                      >
                        Confirmo y acepto los
                        <Link to="/terms"> Terminos y condiciones</Link>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" className="btn btn-dark w-50 boton">
                        Registrar
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
