import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Services } from "./../component/services";
import { Carousel } from "./../component/carousel";
import { Navbar } from "./../component/navbar";
import { Footer } from "./../component/footer";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const titleServices = ["Música", "Fotografía", "Locaciones", "Catering"];

  return (
    <div>
      <Navbar />
      <Carousel></Carousel>
      <div className="container-fluid my-4">
        <Services titulo={titleServices[0]}></Services>
      </div>
      <div className="container-fluid my-4">
        <Services titulo={titleServices[1]}></Services>
      </div>
      <div className="container-fluid my-4">
        <Services titulo={titleServices[2]}></Services>
      </div>
      <div className="container-fluid my-4">
        <Services titulo={titleServices[3]}></Services>
      </div>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <Footer />
    </div>
  );
};
