import Home from "./pages/Home/Home.jsx";
import Index from "./components/Index/Index.jsx";
import React, { useState } from "react";
import RollingGallery from "./components/RollingGallery/RolligGallery.jsx";
import Card from "./components/Card/Card.jsx";
import "./App.css";
export default function App() {
  // Aquí se guarda el índice que se seleccionó
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);
  // Aquí se guarda el estado del componente Card
  const [showCard, setShowCard] = useState(true);

  const handleSelect = (index) => {
    // 1. Oculta la card
    setShowCard(false);

    // 2. Espera un momento para que la animación de salida termine
    setTimeout(() => {
      setLastSelectedIndex(index);
      // 3. Muestra la card con la nueva información
      setShowCard(true);
    }, 300); // 300ms es un buen tiempo para una transición suave
  };

  const texts = [
    "Texto extendido para el botón 1",
    "Texto extendido para el botón 2",
    "Texto extendido para el botón 3",
    "Texto extendido para el botón 4",
    "Texto extendido para el botón 5",
    "Texto extendido para el botón 6",
    "Texto extendido para el botón 7",
  ];

  return (
    <>
      <Home />

      <div>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
      <div className="contenedor-principal">
        <Index
          onSelect={handleSelect}
          selectedIndex={lastSelectedIndex}
          hoverTexts={texts}
        />
        {lastSelectedIndex !== null && (
          <Card
            isVisible={showCard}
            title={texts[lastSelectedIndex]}
            description={"un pequeño parrafo para saber que este bien"}
            image="/static/images/cards/contemplative-reptile.jpg"
          />
        )}
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
}
