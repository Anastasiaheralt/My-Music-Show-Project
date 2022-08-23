import React from "react";

export const ProfileData = () => {
  return (
    <div>
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
              placeholder="Disabled input"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};
