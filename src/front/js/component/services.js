import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./services.css";
// import { Context } from "../store/appContext";

export const Services = (props) => {
  // const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-fluid pb-5">
        <h1 className={props.csstitulo}>{props.titulo}</h1>
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-header bg-white text-center">
                <img src={props.imagen + 2} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{props.name1}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="/" className="btn btn-dark boton">
                  Detalles
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <div className="card-header bg-white text-center">
                <img src={props.imagen + 3} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{props.name2}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="/" className="btn btn-dark boton">
                  Detalles
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <div className="card-header bg-white text-center">
                <img src={props.imagen + 4} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{props.name3}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="/" className="btn btn-dark boton">
                  Detalles
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <div className="card-header bg-white text-center">
                <img src={props.imagen + 5} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{props.name4}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="/" className="btn btn-dark boton">
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
