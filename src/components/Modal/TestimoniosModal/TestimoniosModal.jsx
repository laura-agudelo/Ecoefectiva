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
          <h2>Información legal</h2>
          <p>
            El efluente generado se ajusta a las normativas establecidas para su
            descarga en cuerpos de agua dulce, como lo especifican la Resolución
            2202 de 2006, la Resolución 0631 de 2015, el Decreto 3930 de 2010,
            el Decreto 1076 de 2015 y demás regulaciones vigentes relacionadas
            con el manejo apropiado de aguas servidas o residuales de origen
            doméstico. Es fundamental destacar que el cumplimiento de estas
            normas no es únicamente un requisito para el día de la inauguración
            o los primeros meses de operación. En contraste con prácticas
            anteriores que se limitaban a procesos de depuración primarios
            instalados con tecnologías convencionales, basadas en el erróneo
            criterio de "algo es mejor que nada", se evidencia que estas
            tecnologías tradicionales ocupan extensas áreas de terreno y
            conllevan costos de equipamiento similares o superiores en
            comparación con tecnologías alternativas que efectivamente cumplen
            con su propósito.
          </p>
          <img src="grafica.png" alt="grafica" />
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
