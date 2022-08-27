import React from "react";
import "./providerProfile.css";

export const Presupuesto = () => {
  return (
    <>
      <div className="card p-4 justify-content-center textfont1">
        <form className="mx-1 mx-md-4">
          
          <h4>Solicitar Presupuesto</h4>
          <input className="form-control m-2 btbr" placeholder="nombre" />
          <input className="form-control m-2 btbr" placeholder="email" />
          <input className="form-control m-2 btbr" placeholder="telefono" />
          <input className="form-control m-2 btbr" type="date" />
        </form>
        
        <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
          <button type="submit" className="mt-3 btn btn-dark w-50 btbr">
            Enviar Solicitud
          </button>
        </div>
      </div>
    </>
  );
};
