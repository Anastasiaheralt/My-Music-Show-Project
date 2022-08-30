import React from "react";
import "./register.css";

export const ProfileData = () => {
  return (
    <div className="container d-flex fuente2">
      <div className="col-6 ">
        <form>
          <fieldset disabled>
            <legend>Datos personales</legend>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Nombres
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder="Disabled input"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Correo electronico
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder="Disabled input"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Contraseña
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder="Disabled input"
              />
            </div>
          </fieldset>
        </form>
      </div>
      <div className="col-6 m-3 p-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Eventos en proceso
            </a>
          </div>
        </nav>
        <div className="card p-4 justify-content-center textfont1">
          <br />
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Evento en progreso</h5>
                <small>1 day ago</small>
              </div>
              <p className="mb-1">Inauguración Restaurant</p>
              <small>Ruhano Studio.</small>
            </a>
          </div>
          <br />
          <div className="progress">
            <div
              className="progress-bar w-75 bg-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Evento en progreso</h5>
                <small>5 days ago</small>
              </div>
              <p className="mb-1">Grduación UCV</p>
              <small>Dj Step5.</small>
            </a>
          </div>
        </div>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Eventos finalizados
            </a>
          </div>
        </nav>

        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contatado</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Boda real</p>
            <small>Fotografía Studio.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contratado</h5>
              <small className="text-muted">21 days ago</small>
            </div>
            <p className="mb-1">Grduación Medicina ULA.</p>
            <small className="text-muted">Dj Ann.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contratado</h5>
              <small className="text-muted">1 month ago</small>
            </div>
            <p className="mb-1">Inauguración centro comercial</p>
            <small className="text-muted">Catering snacks.</small>
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};
