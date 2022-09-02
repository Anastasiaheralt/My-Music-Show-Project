import React, { useContext } from "react";
import { Navbar } from "./../component/navbar";
import { Footer } from "./../component/footer";
import { ProfileData } from "../component/profileData";
import "./providerProfile.css";
import { Context } from "../store/appContext";

const card = {
  Title: "Name",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitabus neque.",
  ButtonC: "Actualizar",
};

export const UserPage = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <div className="container-fluid bgdeg p-1">
        <br />
        <br />
        <br />
        <Navbar />
      </div>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-4">
            <div className="container borde">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{store.user.name}</h5>
                  <p className="card-text">{card.Description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <ProfileData />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
