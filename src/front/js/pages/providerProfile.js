import React from "react";
import { ProviderProfileCarousel } from "./../component/providerProfileCarousel";
import { AddToCartModal } from "../component/addToCartModal";
import { ServiceDescription } from "../component/serviceDescription";
import { UserFeedback } from "../component/userFeedback";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./providerProfile.css";
import { Presupuesto } from "./presupuesto";

export const ProviderProfile = () => {
  return (
    <>
      <div className="container-fluid bgdeg p-1">
        <br />
        <br />
        <br />
        <Navbar />
      </div>

      <div className="row m-3">
        <div className="col-8 textfont1">
          <h1>Hotel Humboldt</h1>
          <div className="container-fluid my-4">
            <div className="row">
              <div className="col-6">
                <p className="text">
                  Costo: <strong className="text-success">600$ - 2000$</strong>{" "}
                </p>
              </div>
              {/* <div className="col-2">
                <div className="alert alert-info" role="alert">
                  Este proveedor tiene descuento, <br></br>¡aprovecha!
                </div>
              </div> */}
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
                    Favorito
                  </label>
                </div>
              </div>
            </div>
            <ProviderProfileCarousel></ProviderProfileCarousel>
            <ServiceDescription></ServiceDescription>
            <UserFeedback></UserFeedback>
          </div>
        </div>
        <div className="col-4 justify-content-center">
          <br />
          <br />
          <br /> <br />
          <br />
          <Presupuesto />
        </div>
      </div>

      <Footer />
    </>
  );
};
