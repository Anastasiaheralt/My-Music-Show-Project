import React, { useContext } from "react";
import "./register.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ProfileData = () => {
  const { store } = useContext(Context);
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
                placeholder={store.user.name}
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
                placeholder={store.user.email}
              />
            </div>
            <div className="mb-3 row">
              <label htmlFor="disabledTextInput" className="form-label">
                Contraseña
              </label>
              <>
                <button type="button" className="btn btn-dark w-100 borde">
                  Cambiar Contraseña
                </button>
              </>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="col-6 m-3 p-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Eventos en proceso
            </Link>
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
            <Link
              to="#"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Evento en progreso</h5>
                <small>1 day ago</small>
              </div>
              <p className="mb-1">Inauguración Restaurant</p>
              <small>Ruhano Studio.</small>
            </Link>
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
            <Link
              to="#"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Evento en progreso</h5>
                <small>5 days ago</small>
              </div>
              <p className="mb-1">Grduación UCV</p>
              <small>Dj Step5.</small>
            </Link>
          </div>
        </div>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Eventos finalizados
            </Link>
          </div>
        </nav>

        <div className="list-group">
          <Link
            to="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contatado</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Boda real</p>
            <small>Fotografía Studio.</small>
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contratado</h5>
              <small className="text-muted">21 days ago</small>
            </div>
            <p className="mb-1">Grduación Medicina ULA.</p>
            <small className="text-muted">Dj Ann.</small>
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contratado</h5>
              <small className="text-muted">1 month ago</small>
            </div>
            <p className="mb-1">Inauguración centro comercial</p>
            <small className="text-muted">Catering snacks.</small>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};
