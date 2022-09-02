import React from "react";
import "./providerProfile.css";

export const Presupuesto = () => {
  return (
    <>
      <div className="card p-4 justify-content-center textfont1">
        <form
          className="mx-1 mx-md-4"
          id="fs-frm"
          name="Presupuestos My Music Show"
          accept-charset="utf-8"
          action="https://formspree.io/f/mdojkwvy"
          method="post"
        >
          <fieldset id="fs-frm-inputs">
            <h4>Solicitar Presupuesto</h4>
            <label for="full-name">Nombre</label>
            <input
              className="form-control m-2 btbr"
              type="text"
              name="name"
              id="full-name"
              placeholder="Nombre"
              required=""
            />

            <label for="email">Email</label>
            <input
              className="form-control m-2 btbr"
              type="email"
              name="De:"
              id="email-address"
              placeholder="email@domain.com"
              required=""
            />

            <label for="Teléfono">Teléfono</label>
            <input
              className="form-control m-2 btbr"
              placeholder="teléfono"
              type="text"
              name="telefono"
              id="telefono"
              required=""
            />

            <label for="date">Fecha</label>
            <input className="form-control m-2 btbr" type="date" />

            <label for="Departmento">Servicio</label>
            <select
              name="departmento"
              id="department"
              required=""
              className="form-control m-2 btbr"
            >
              <option
                value=""
                selected=""
                disabled=""
                className="form-control m-2 btbr"
              >
                Selecciona Servicio
              </option>
              <option value="Música" className="form-control m-2 btbr">
                Música
              </option>
              <option value="Catering" className="form-control m-2 btbr">
                Catering
              </option>
              <option value="Fotografía" className="form-control m-2 btbr">
                Fotografía
              </option>
              <option value="Locaciones" className="form-control m-2 btbr">
                Locaciones
              </option>
            </select>
            <label for="message">Mensaje</label>
            <textarea
              className="form-control m-2 btbr"
              rows="5"
              name="mensaje"
              id="message"
              required=""
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Department Contact Form Submission"
            />
          </fieldset>
          <div className="d-flex justify-content-center mx- mb-2 mb-lg-4">
            <input
              type="submit"
              value="Solicitar Presupuesto"
              className="mt-3 btn btn-dark w-80 btbr"
            />
          </div>{" "}
        </form>
      </div>
    </>
  );
};
