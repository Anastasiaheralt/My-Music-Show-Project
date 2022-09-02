import React, { useEffect, useContext } from "react";
import "./register.css";
import { Context } from "../store/appContext";

export const ProviderData = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.user) {
      actions.getProviderById(store.user.id);
    }
  }, [store.user.id]);

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
                <button type="button" className="btn btn-dark borde btn-sm">
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
              <h6>Mi portafolio</h6>
              <div>
                <div className="container p-1 text-center">
                  <div className="row gx-5">
                    <div className="col m-1 d-flex">
                      {console.log(store.proveedorActual)}
                      {store.proveedorActual &&
                        Object.entries(store.proveedorActual?.fotos).map(
                          ([key, value], index) => {
                            console.log(value);
                            return (
                              <div className="m-1 border bg-light" key={index}>
                                <img
                                  src={value.photo_url}
                                  className="img-fluid"
                                  alt="..."
                                  width="150px"
                                ></img>
                              </div>
                            );
                          }
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="col-6 m-3 p-3">
        <div className="list-group borde2">
          <div className="text-center borde2 bg-light p-2">
            <h5>Eventos Finalizados</h5>
          </div>
          <a
            href="#"
            className="list-group-item list-group-item-action"
            // aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Boda Ramírez</h5>
              <small>3 days ago</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Graduación ULA</h5>
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
