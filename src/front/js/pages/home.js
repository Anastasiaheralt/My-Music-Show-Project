import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Services } from "./../component/services";
import { Carousel } from "./../component/carousel";
import { Navbar } from "./../component/navbar";
import { Footer } from "./../component/footer";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const titleServices = [
    "Destacados",
    "Música",
    "Fotografía",
    "Locaciones",
    "Catering",
  ];
  const pictures = "https://picsum.photos/200?random=";
  const photonames = [
    "Maria Teresa Monasterios",
    "Orlando Navas",
    "Edwing Castillo",
    "Danner Baron",
  ];

  const locationnames = [
    "La Estancia de Bolivar",
    "Ara Merú Lodge",
    "Hotel Humboldt",
    "Bora La Mar",
  ];

  return (
    <div>
      <Navbar />
      <Carousel></Carousel>
      <div className="container-fluid my-2 fondo p-3">
        <Services
          csstitulo={"m-2 text-white"}
          titulo={titleServices[0]}
          imagen={pictures}
        ></Services>
      </div>
      <div className="container-fluid my-2">
        <Services titulo={titleServices[1]} imagen={pictures + 1}></Services>
      </div>
      <div className="container-fluid my-2 fondo p-3">
        <Services
          csstitulo={"m-2 text-white"}
          titulo={titleServices[2]}
          imagen={pictures + 2}
          name1={photonames[0]}
          name2={photonames[1]}
          name3={photonames[2]}
          name4={photonames[3]}
        ></Services>
      </div>
      <div className="container-fluid my-2 p-3">
        <Services
          titulo={titleServices[3]}
          imagen={pictures + 3}
          name1={locationnames[0]}
          name2={locationnames[1]}
          name3={locationnames[2]}
          name4={locationnames[3]}
        ></Services>
      </div>
      <div className="container-fluid my-2 fondo p-3">
        <Services
          csstitulo={"m-2 text-white"}
          titulo={titleServices[4]}
          imagen={pictures + 4}
        ></Services>
      </div>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <Footer />
    </div>
  );
};
