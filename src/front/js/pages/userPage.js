import React from "react";
import { Navbar } from "./../component/navbar";
import { Footer } from "./../component/footer";
import { ProfileData } from "../component/profileData";

const card = {
  Title: "Name",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitabus neque.",
  ButtonC: "Actualizar perfil",
};

export const UserPage = () => {
  return (
    <div>
      <br />
      <br />
      <Navbar />
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-3">
            <div className="container">
              <div className="card" /*style="width: 18rem"*/>
                <img
                  className="card-img-top"
                  src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6"
                  alt="Card image cap"
                >
                  {" "}
                </img>
                <div className="card-body">
                  <div className>
                  <label htmlFor="disabledTextInput" className="form-label">
                  <h5 className="card-title">{card.Title}</h5></label>
                  <p className="card-text">{card.Description}</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-info">
                    {card.ButtonC}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <ProfileData />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
