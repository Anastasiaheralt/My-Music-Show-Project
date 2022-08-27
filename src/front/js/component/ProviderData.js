import React from "react";
import "./register.css";

export const ProviderData = () => {
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
            <div class="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder="Disabled input"
              />
            </div>
            <div class="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Rif
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Correo electrónico
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder="Disabled input"
              />
            </div>
            <div class="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder="Disabled input"
              />
            </div>
            <div class="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Servicio
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
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
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Boda Ramírez</h5>
              <small>3 days ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Grduación ULA</h5>
              <small classNme="text-muted">21 days ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Inauguración Centro Comercial </h5>
              <small className="text-muted">1 month ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Boda Zambrano y Zapata </h5>
              <small className="text-muted">2 months ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Celebración 15 años </h5>
              <small className="text-muted">2 months ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Beach Party </h5>
              <small className="text-muted">3 months ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Boda real </h5>
              <small className="text-muted">3 months ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Boda Susana y Carlos </h5>
              <small className="text-muted">Last year</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
