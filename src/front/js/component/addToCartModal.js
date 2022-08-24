import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { useState } from "react";

export const AddToCartModal = (props) => {
  const [hide, setHide] = useState("");
  const handleClose = () => {
    setHide(true);
    props.on = false;
  };
  return (
    <Modal show={props.on} onHide={hide}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        {/* Crear acá en el botón el setter para que cambie el state de la propiedad show */}
        <Button
          onClick={handleClose} /*{() => setHide(true)}*/ variant="secondary">
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
