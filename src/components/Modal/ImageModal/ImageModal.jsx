// ImageModal.jsx

import React, { useState } from "react";
import "./ImageModal.css";

const ImageModal = ({ data, initialIndex, onClose }) => {
  const [modalCurrentIndex, setModalCurrentIndex] = useState(initialIndex);

  const prevSlide = () => {
    setModalCurrentIndex(
      modalCurrentIndex === 0 ? data.length - 1 : modalCurrentIndex - 1
    );
  };

  const nextSlide = () => {
    setModalCurrentIndex(
      modalCurrentIndex === data.length - 1 ? 0 : modalCurrentIndex + 1
    );
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <button className="modal-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        <img
          src={data[modalCurrentIndex].src}
          alt={data[modalCurrentIndex].title}
        />
        <button className="modal-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
