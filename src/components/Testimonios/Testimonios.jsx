import React, { useState } from "react";
import "./Testimonios.css";
import TestimoniosModal from "../Modal/TestimoniosModal/TestimoniosModal";

function Testimonios() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="testimonio-container">
      <h1 className="testimonio-main-title">BIOMODULO</h1>

      <div className="testimonio-content">
        {/* Contenedor de las dos imágenes con título */}
        <div className="testimonio-column left-column">
          <h3 className="testimonio-subtitle">Nuestra Comunidad</h3>
          <div className="testimonio-images-wrapper">
            <img
              src="/src/assets/Images/img1.png"
              alt="Imagen de la comunidad 1"
              className="image"
            />
            <img
              src="/src/assets/Images/img1.png"
              alt="Imagen de la comunidad 2"
              className="image"
            />
          </div>
        </div>

        {/* Contenedor del modal */}
        <div className="testimonio-column right-column">
          <h3 className="testimonio-subtitle">Contactanos</h3>
          <img
            src="/src/assets/Images/img1.png"
            alt="Imagen para abrir el modal"
            className="image-modal"
            onClick={openModal}
          />
        </div>
      </div>

      <TestimoniosModal
        isOpen={isModalOpen}
        onClose={closeModal}
      ></TestimoniosModal>
    </div>
  );
}

export default Testimonios;
