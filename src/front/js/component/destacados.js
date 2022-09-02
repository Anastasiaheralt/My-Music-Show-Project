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

  const [modalData, setModalData] = useState([]);

  return (
        <>

<div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body px-5">
              <div className="text-center my-3">
                <i className="fa-solid fa-gear fa-5x my-2"></i>
                <h3> {`Usted a contratado a ${modalData.name} para el servicio de ${modalData.service}`} </h3>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {}}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>





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
                    
                                <button
                                  type="button"
                                  className="btn btn-dark boton"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal3"
                                  onClick={() => { setModalData(provider), handleSubmitContrato({
                                    proveedor_id: provider.id,
                                    user_id: store.user.id,
                                  }) }}
                                >
                                Contratar
                                </button>
                    
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
</>  );
};
