import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { useState } from "react";

export const AddToCartModal = (props) => {
  
  return (
    // <div className="modal container-fluid" tabIndex="-1">
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">
    //           ¿Deseas contratar a este proveedor de servicios?
    //         </h5>
    //         <button type="button" className="btn-close"></button>
    //       </div>
    //       <div className="modal-body">
    //         <p>Añadir a este proveedor a mis eventos</p>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn btn-secondary">
    //           Cancelar
    //         </button>
    //         <button type="button" className="btn btn-primary">
    //           Guardar
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Modal show={props.on}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        {/* Crear acá en el botón el setter para que cambie el state de la propiedad show */}
        <Button onClick={() => setShow(false)} variant="secondary">
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddToCartModal.propTypes = {
  on: PropTypes.boolean,
};
