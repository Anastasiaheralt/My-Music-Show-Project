import React from "react";
import "./providerProfile.css";

export const Presupuesto = () => {
  return (
    <>
      <div className="card p-4 justify-content-center textfont1">
        <form
          className="mx-1 mx-md-4"
          id="fs-frm"
          name="department-contact-form"
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
              name="_replyto"
              id="email-address"
              placeholder="email@domain.tld"
              required=""
            />

            <label for="telefono">Teléfono</label>
            <input
              className="form-control m-2 btbr"
              placeholder="telefono"
              type="text"
              name="telefono"
              id="telefono"
              required=""
            />

            <label for="date">Fecha</label>
            <input className="form-control m-2 btbr" type="date" />

            <label for="department">Servicio</label>
            <select
              name="department"
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
              <option value="Front Desk" className="form-control m-2 btbr">
                Música
              </option>
              <option value="Customer Care" className="form-control m-2 btbr">
                Catering
              </option>
              <option
                value="Shipping Receiving"
                className="form-control m-2 btbr"
              >
                Fotografía
              </option>
              <option
                value="Billing Accounting"
                className="form-control m-2 btbr"
              >
                Locaciones
              </option>
            </select>
            <div className="mb-3 justify-content-center textfont1">
              <label for="exampleFormControlTextarea1" class="form-label">
                Mensaje
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
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
          </div>
        </form>
      </div>
    </>
  );
};
