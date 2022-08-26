import React from "react";

export const Form = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center h-75">
      <div Name="col-lg-12 col-xl-11">
        <div className="card text-black border border-0">
          <div className="card-body p-md-5 border border-0">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <h2 className="text-center mb-4">Solicitar Presupuesto</h2>

                <form className="mx-1 mx-md-4">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre y Apellidos"
                      aria-label="Nombre y Apellidos"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-envelopes"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-phone-flip"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefono"
                      aria-label="Telefono"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fecha"
                      aria-label="Fecha"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-info">
                      Enviar Solicitud
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
