import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { Carousel } from "./../component/carousel";
import { Services } from "./../component/services";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="container mt-5">
        <Carousel></Carousel>
      </div>
      <div className="container-fluid my-4">
        <Services></Services>
      </div>

      <div className="container-fluid my-4">
        <Services></Services>
      </div>

      <div className="container-fluid my-4">
        <Services></Services>
      </div>

      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
    </div>
  );
};
