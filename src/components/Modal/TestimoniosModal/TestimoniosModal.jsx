import React from "react";
import "./TestimoniosModal.css";

function TestimoniosModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-texto">
          <h2>Información de contacto</h2>
          <p>
            Aquí puedes colocar toda la información que necesites. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel
            laoreet imperdiet, sapien sapien commodo risus, vel vehicula libero
            dui in ex.
          </p>
          <p>Puedes incluir direcciones, teléfonos, correos, etc.</p>
        </div>
        {children}
        <button className="modal-close-btn" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default TestimoniosModal;
