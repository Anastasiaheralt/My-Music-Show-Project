import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "./register.css";

export const UpImage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [state, setState] = useState("");
  const url = `https://api.cloudinary.com/v1_1/solventemos-inc/image/upload`;
  const { store, actions } = useContext(Context);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "my_music_show");

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data: ", data);
        setState(data.url);
      })
      .catch(error);
  };

  useEffect(() => {
    actions.uploadApiImage(state);
  }, []);
  // Hacer un useEffect cuyo arreglo de dependencia va a ser el State de la linea 21
  //Hacer un fetch con un PUT a la tabla de nuestra API
  //

  return (
    <div>
      <div className="container-fluid text-center fuente2 bg-light borde2 mt-5">
        <h5>Agregar Fotos a tu Portafolio</h5>
        <input
          className="borde form-control mt-3 "
          type="file"
          onChange={(event) => setSelectedFile(event.target.files[0])}
        />
        <div className="mt-3">
          <button className="borde btn-dark p-2" onClick={uploadImage}>
            Subir Imagen
          </button>
        </div>

        {state !== "" && (
          <>
            <img
              src={state}
              className="card-img-top"
              alt="img"
              width={200}
              height={200}
            />
          </>
        )}
      </div>
    </div>
  );
};
