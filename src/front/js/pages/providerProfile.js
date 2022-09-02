import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserFeedback } from "../component/userFeedback";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

import "./providerProfile.css";
import { Presupuesto } from "./presupuesto";

export const ProviderProfile = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProviderById(id);
  }, [id]);

  return (
    <>
      <div className="container-fluid bgdeg p-1">
        <br />
        <br />
        <br />
        <Navbar />
      </div>

      <div className="row m-3">
        <div className="col-8 textfont1 text-uppercase">
          <h1>{store.proveedorActual && store.proveedorActual.name}</h1>
          <div className="container-fluid my-4">
            <div className="row">
              <div className="col-6">
                <h5 className="text">
                  Costo: <strong className="text-success">600$ - 2000$</strong>{" "}
                </h5>
              </div>
              {/* <div className="col-2">
                <div className="alert alert-info" role="alert">
                  Este proveedor tiene descuento, <br></br>¡aprovecha!
                </div>
              </div> */}
              {/* <div className="col-2">
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
              </div> */}
            </div>

            <div className=" col-lg-6 col-md-12">
              {console.log(store.proveedorActual)}
              {store.proveedorActual &&
                Object.entries(store.proveedorActual?.fotos).map(
                  ([key, value], index) => {
                    console.log(value);
                    return (
                      <div className="m-1 border bg-light" key={index}>
                        <img
                          src={value.photo_url}
                          className="img-fluid"
                          alt="..."
                          width="500px"
                        ></img>
                      </div>
                    );
                  }
                )}
            </div>
            <div className="container-fluid mt-3 textfont">
              <h4>Descripcion del servicio</h4>
              <p className="text-wrap fs-6 text">
                {store.proveedorActual &&
                  store.proveedorActual.service_description}
              </p>
            </div>
            <div className="p-2">
              <UserFeedback />
              <UserFeedback />
              <UserFeedback />
            </div>
          </div>
        </div>
        <div className="col-4 justify-content-center textfont12">
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
