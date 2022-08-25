import React from "react";
import "./conocenos.css";

export const Conocenos = () => {
  return (
    <div className="container-fluid d-flex">
      <div className="row w-50 h-50 p-4">
        <img
          src="https://img.freepik.com/foto-gratis/amigos-tintinean-vasos-bebida-bar-moderno_1150-18971.jpg?w=826&t=st=1660779408~exp=1660780008~hmac=3178a8edabbeed9376817fe1d7af65f9c0127cd20c1dbeceb1f5113e523cc3e5"
          alt="workers"
        />
      </div>
      <div className="w-50">
        <h1 className="text-center texto-borde1 mt-5">
          {" "}
          Conoce más sobre <br /> MyMusicShow{" "}
        </h1>
        <p className="texto21">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sed voluptatem dolor id error quam molestiae, earum est a eligendi
          officia. Ipsum ducimus vel sed ex, fugit culpa quam
        </p>
      </div>
    </div>
  );
};
