import React from "react";
import { AddToCartModal } from "./addToCartModal";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./services.css";
export const ServiceDescription = () => {
  const [show, setShow] = useState(false);
  function handleAction(event) {
    setShow(!show);
  }
  return (
    <>
      <div className="container-fluid mt-3 textfont">
        <h4>Descripcion del servicio</h4>
        <p className="text-wrap fs-6 text">
          Oasis del descanso y la diversión Ubicado en la cima del Parque
          Nacional Waraira Repano (El Ávila) se encuentra este hito de la
          arquitectura moderna Venezolana, referencia del desarrollo urbano de
          la ciudad de Caracas y del país.
        </p>
        <button onClick={() => setShow(true)} className="btn boton btn-dark">
          Contratar servicio
        </button>
      </div>
      {/* <AddToCartModal on={show} onAction={handleAction} /> */}
    </>
  );
};
