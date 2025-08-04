import React from "react";
import { useState, useEffect } from "react";
import "./SimpleArrowRG.css"; // Asegúrate de tener un archivo CSS para los estilos

function SimpleArrowRG({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };

  // Puedes añadir una función para avanzar automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(interval);
  }, [currentIndex]); // Se reinicia cada vez que cambia el slide

  return (
    <div className="carousel">
      {/* Botón de navegación anterior */}
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Contenedor de slides con la animación */}
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img src={slide.src} alt={slide.title} />
          </div>
        ))}
      </div>

      {/* Botón de navegación siguiente */}
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Indicadores (los puntos) */}
      <div className="carousel-indicators">
        {data.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SimpleArrowRG;
