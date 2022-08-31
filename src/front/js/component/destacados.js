import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./services.css";
import { Context } from "../store/appContext";

export const Destacados = (props) => {
  const { store } = useContext(Context);

  return (
    <div>
      <h1 className="text-white">Destacados</h1>
      <div className="d-flex container-fluid ">
        {store.providers.map((provider) => (
          <div className="container-fluid pb-5">
            <div className="row">
              <div className="col">
                <div className="card" key={`servicio-${provider.id}`}>
                  <div className="card-header bg-white text-center">
                    <img src={props.imagen + provider.id} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{provider.name}</h5>
                    <p className="card-text">{provider.service_description}</p>
                    <Link
                      className="btn btn-dark boton"
                      to={`/provider/${provider.id}`}
                    >
                      Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
