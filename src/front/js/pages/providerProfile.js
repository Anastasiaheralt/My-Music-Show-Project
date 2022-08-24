import React from "react";
import { ProviderProfileCarousel } from "./../component/providerProfileCarousel";
import { AddToCartModal } from "../component/addToCartModal";
import { ServiceDescription } from "../component/serviceDescription";
import { UserFeedback } from "../component/userFeedback";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../styles/home.css";

export const ProviderProfile = () => {
  return (
    <div>
      <br />
      <br />
      <Navbar />
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-10">
            <h1>Juan Juancin</h1>
            <div className="container-fluid my-4">
              <div className="row">
                <div className="col-6">
                <p className="text">Costos pueden ir entre 200$ - 300$</p>
                </div>
                <div className="col-2">
                <div className="alert alert-info" role="alert">
                  Este proveedor tiene descuento, <br></br>¡aprovecha!
                </div>
                </div>
                <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Agregar a proveedores favoritos
                  </label>
                </div>
                </div>
              </div>
              <ProviderProfileCarousel></ProviderProfileCarousel>
              <ServiceDescription></ServiceDescription>
              <UserFeedback></UserFeedback>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
