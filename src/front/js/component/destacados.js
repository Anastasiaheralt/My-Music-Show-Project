import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./services.css";

export const Destacados = (props) => {
  const { store, actions } = useContext(Context);

  let initialState = {
    proveedor_id: "",
  };

  console.log(initialState);

  const handleSubmitContrato = (values) => {
    // e.preventDefault()
    console.log(values, "OLOOO");
    actions.handleContratar(values);
  };

  const handleGetContratos = () => {
    // e.preventDefault()
    console.log("que tengo pendiente");
    actions.getContratosPendientes();
  };

  const handleGetPedidos = () => {
    // e.preventDefault()
    console.log("que tengo pendiente");
    actions.getPedidosPendientes();
  };

  return (
    <div className="textfont">
      <h1 className="text-white">Destacados</h1>
      <div className="d-flex container-fluid ">
        {store.providers.map((provider, index) => (
          <div className="container-fluid pb-5">
            <div className="row">
              <div className="col">
                <div className="card" key={index}>
                  <div className="card-header bg-white text-center">
                    <img src={props.imagen + provider.id} />
                  </div>
                  <div className="card-body">
                    <h5 className=" text-uppercase card-title">
                      {provider.name}
                    </h5>
                    <h6 className=" fst-italic text-uppercase card-text">
                      {provider.service}
                    </h6>
                    <Link
                      className="btn btn-dark boton"
                      to={`/provider/${provider.id}`}
                    >
                      Detalles
                    </Link>
                    {/* <button
                      className="btn status"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                      onClick={() =>
                        handleSubmitContrato({
                          proveedor_id: provider.id,
                          user_id: store.user.id,
                        })
                      }
                    >Contratar</button> */}

                    {/* <button
                      className="btn status"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                      onClick={() =>
                        handleGetContratos()
                      }
                    >Ver Contratos Pendientes</button> */}
                    {/* <button
                      className="btn status"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                      onClick={() =>
                        handleGetPedidos()
                      }
                    >Ver Pedidos Pendientes</button> */}
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
