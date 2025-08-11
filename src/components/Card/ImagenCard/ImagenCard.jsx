import React from "react";
import "./ImagenCard.css";

function ImagenCard() {
  return (
    <div className="card-contenedor">
      <div className="card-titel">
        <h1>titulo descritivo</h1>
      </div>
      <div className="card-imagen">
        <img
          src="/src/assets/Images/img1.png"
          alt="Imagen de la comunidad 2"
          className="image"
        />
      </div>
      <div className="card-texto">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem vero
          itaque adipisci deleniti aliquid aliquam sit rerum facilis officia,
          omnis et. Odio corrupti alias eum ad accusantium quos excepturi odit!
        </p>
      </div>
    </div>
  );
}

export default ImagenCard;
