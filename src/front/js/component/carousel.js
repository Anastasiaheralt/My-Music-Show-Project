import React from "react";
import CARO1 from "../../img/CARO1.png";
import CARO2 from "../../img/CARO2.png";
import CARO3 from "../../img/CARO3.png";
import CARO4 from "../../img/CARO4.png";
import "./carousel.css";

export const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-image">
              <img src={CARO1} className="w-100 qlq" alt="1" />
            </div>
            <div className="carousel-caption bc d-none d-md-block">
              <h1>Tu evento ideal está a unos click de distancia</h1>
              <p>
                Tenemos lo que necesitas para crear la mejor experiencia para tus familiares y amigos. 
              </p>
            </div>
          </div>
          <div className="carousel-item justify-content-center">
            <img src={CARO2} className="d-block w-100" alt="2" />
            <div className="carousel-caption bc d-none d-md-block">
              <h1>Contrata servicios de calidad</h1>
              <p>
                Pasea por los perfiles de músicos, conoce su talento y trayectoria. 
              </p>
            </div>
          </div>
          <div className="carousel-item justify-content-center">
            <img src={CARO3} className="d-block w-100" alt="3" />
            <div className="carousel-caption bc d-none d-md-block">
              <h1>¡Haz crecer tu marca!</h1>
              <p>
              Regístrate como proveedor y llega a muchos más clientes al instante.
              </p>
            </div>
          </div>
          <div className="carousel-item justify-content-center">
            <img src={CARO4} className="d-block w-100" alt="4" />
            <div className="carousel-caption bc d-none d-md-block">
              <h1>Conviértete en el alma de la fiesta</h1>
              <p>
              Organiza fácilmente conciertos y reuniones involvidables
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
