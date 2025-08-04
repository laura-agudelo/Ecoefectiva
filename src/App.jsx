import Home from "./pages/Home/Home.jsx";
import Index from "./components/Index/Index.jsx";
import React, { useState } from "react";
import RollingGallery from "./components/RollingGallery/RolligGallery.jsx";
import Card from "./components/Card/Card.jsx";
import "./App.css";
import textsData from "./assets/data/Card.json";

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

  return (
    <>
      <Home />

      <div>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>

      <div></div>

      <div className="contenedor-principal-index">
        <div className="contenedor-index">
          <Index
            onSelect={handleSelect}
            selectedIndex={lastSelectedIndex}
            hoverTexts={textsData.map((data) => data.title)}
          />
        </div>

        <div className="contenedor-card">
          {lastSelectedIndex !== null && (
            <Card
              isVisible={showCard}
              title={textsData[lastSelectedIndex].title}
              description={textsData[lastSelectedIndex].description}
              image={textsData[lastSelectedIndex].image}
            />
          )}
        </div>
      </div>
      <div> </div>
      <div> </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
}
