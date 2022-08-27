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
                Correo electronico
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
                Contrasena
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
        <div className="card">
          <ul>
            <h5>Eventos Contratados</h5>
            <li>Eventos 1: Boda real lo que sea</li>
            <li>Eventos 2: Boda real lo que sea</li>
            <li>Eventos 3: Boda real lo que sea</li>
            <li>Eventos 4: Boda real lo que sea</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
