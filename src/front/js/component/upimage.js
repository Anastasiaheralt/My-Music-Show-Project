import React, { useEffect, useState } from "react";

export const UpImage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [state, setState] = useState("");
  const url = `https://api.cloudinary.com/v1_1/solventemos-inc/image/upload`;
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
      .catch((error) => console.log(error));
  };

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
