import React, { useContext } from "react";
import "./register.css";
import { Context } from "../store/appContext";

export const ProviderData = () => {
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
                Correo electrónico
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
                <button type="button" className="btn btn-primary btn-sm">
                  Cambiar Contraseña
                </button>
              </>
            </div>

            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Servicio
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder={store.user.service}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Descripción del servicio
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder={store.user.service_description}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Costo del servicio
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder={store.user.provider_charges}
              />
            </div>
            <div>
              Eventos
              <div>
                <div className="container px-4 text-center">
                  <div className="row gx-5">
                    <div className="col">
                      <div className="p-3 border bg-light">
                        <img
                          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          className="img-fluid"
                          alt="..."
                        ></img>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 border bg-light">
                        <img
                          src="https://images.unsplash.com/photo-1615966650071-855b15f29ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
                          className="img-thumbnail"
                          alt="..."
                        ></img>
                      </div>
                      <div className="col">
                        <div className="p-3 border bg-light">
                          <img
                            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            className="img-thumbnail"
                            alt="..."
                          ></img>
                        </div>
                      </div>

                      <div className="col">
                        <div className="p-3 border bg-light">
                          <img
                            src="https://images.unsplash.com/photo-1632054554177-a708126072c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            className="img-thumbnail"
                            alt="..."
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <h5 className="mb-1">Boda Ramírez</h5>
              <small>3 days ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Grduación ULA</h5>
              <small className="text-muted">21 days ago</small>
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
