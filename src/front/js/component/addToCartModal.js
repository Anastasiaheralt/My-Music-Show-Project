import React from 'react'

export const AddToCartModal = () => {
  return (
    //     <div className="modal container-fluid" tabIndex="-1">
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">¿Deseas contratar a este proveedor de servicios?</h5>
    //         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //       </div>
    //       <div className="modal-body">
    //         <p>Añadir a este proveedor a mis eventos</p>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
    //         <button type="button" className="btn btn-primary">Guardar</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="modal container-fluid" tabIndex="-1">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
