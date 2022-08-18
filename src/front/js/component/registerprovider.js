import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
export const Registerprovider = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center h-75">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black border border-0">
            <div className="card-body p-md-5 border border-0">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <h2 className="text-center mb-4">Registro Proveedor</h2>

                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c1"
                          className="form-control"
                          placeholder="Nombre o Razón Social"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example3c1"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c1"
                          className="form-control"
                          placeholder="Contraseña"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd1"
                          className="form-control"
                          placeholder="Repite la Contraseña"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <div className="input-group mb-3">
                          <select
                            className="form-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Selecciona el Servicio...</option>
                            <option value="1">Musica</option>
                            <option value="2">Fotografia</option>
                            <option value="3">Locaciones</option>
                            <option value="4">Catering</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
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
