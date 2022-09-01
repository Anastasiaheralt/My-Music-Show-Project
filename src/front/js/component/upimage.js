import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

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
      .catch((error));
    };

  useEffect(() => {
        actions.uploadApiImage(state)
  }, []);
  // Hacer un useEffect cuyo arreglo de dependencia va a ser el State de la linea 21
  //Hacer un fetch con un PUT a la tabla de nuestra API 
  //

  return (
    <div>
      <div className="container-fluid">
        {state !== "" && (
          <>
            <h6>{state}</h6>
            <img src={state} alt="img" width={200} height={200} />
          </>
        )}
        <div className="mb-3">
          <input
            type="file"
            onChange={(event) => setSelectedFile(event.target.files[0])}
          />
          <button onClick={uploadImage}>Subir Imagen</button>
        </div>
      </div>
    </div>
  );
};
