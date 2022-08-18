import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

export const Services = (props) => {
  return (
    <div className="container-fluid">
      <h1 className="m-3">{props.titulo}</h1>

      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header bg-white text-center">
              <img src="http://www.deepdiveintel.com/wp-content/uploads/2013/09/Owl-Eye-art-300x300.jpg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Pepito Perez</h5>
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

        <div className="col-sm-4">
          <div className="card">
            <div className="card-header bg-white text-center">
              <img src="http://www.deepdiveintel.com/wp-content/uploads/2013/09/Owl-Eye-art-300x300.jpg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Juan Juancin</h5>
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

        <div className="col-sm-4">
          <div className="card">
            <div className="card-header bg-white text-center">
              <img src="http://www.deepdiveintel.com/wp-content/uploads/2013/09/Owl-Eye-art-300x300.jpg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Julio Perea</h5>
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
  );
};
