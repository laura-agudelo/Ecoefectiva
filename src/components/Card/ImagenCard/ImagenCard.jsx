import React from "react";
import "./ImagenCard.css";

function ImagenCard({ title, image, description }) {
  return (
    <div className="card-contenedor">
      <div className="card-titel">
        <h1>{title}</h1>
      </div>
      <div className="card-imagen">
        <img src={image} alt="Imagen de la comunidad 2" className="image" />
      </div>
      <div className="card-texto">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImagenCard;
