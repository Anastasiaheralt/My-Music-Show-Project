import React from "react";

export const UserFeedback = (props) => {
  const comentario = Math.floor(Math.random() * 4);
  const nombre = Math.floor(Math.random() * 20);
  const feedback = [
    "Nos sentimos muy a gusto con el servicio prestado, totalmente recomendable",
    "Nuestro evento estuvo de maravilla, ¡Gracias MyMusicShow!",
    "Recibimos un trato y servicio maravillosos. Nuestros amigos quedaron muy contentos también.",
    "Al principio no pensaba que sería tan fácil. ¡Gracias a MyMusicShow y a ustedes por brindarnos una experiencia inolvidable",
  ];
  const nombresFicticios = [
    "Laura Calderón",
    "Alessandro Di Napoli",
    "Ignacio Rodríguez",
    "Mariángel Castillo",
    "Pedro de Armas",
    "Alicia Toro",
    "Erika Sánchez",
    "Rubén Marcano",
    "Esteban Acosta",
    "Sebastián Casañas",
    "Leonardo Fernández",
    "Mariana Rojas",
    "Javier Guevara",
    "Antonio Torres",
    "Francesco Giménez",
    "Luis Armando Montero",
    "Fernando Arias",
    "Isabella Salas",
    "Amelia Azpurua",
  ];

  return (
    <div className="container-fluid mt-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{nombresFicticios[nombre]}</h5>
          <p className="card-text">{feedback[comentario]}</p>
          <p className="card-text">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  );
};
