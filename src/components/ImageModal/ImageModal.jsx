import React from "react";
import "./ImageModal.css"; // Asegúrate de crear este archivo CSS

const ImageModal = ({ imageSrc, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt="Imagen en grande" />
      </div>
    </div>
  );
};

export default ImageModal;
