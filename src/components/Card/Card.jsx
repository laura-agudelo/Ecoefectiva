import React from "react";
import SimpleArrowRG from "../RollingGallery/SimpleArrowRG/SimpleArrowRG.jsx";
import "./Card.css";

function Card({ title, description, image, isVisible }) {
  return (
    <div className={`card ${isVisible ? "" : "hidden"}`}>
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <SimpleArrowRG data={image} />
      </div>
    </div>
  );
}

export default Card;
