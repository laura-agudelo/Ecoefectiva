import React, { useState } from "react";

import Home from "./pages/Home/Home.jsx";
import Index from "./components/Index/Index.jsx";
import RollingGallery from "./components/RollingGallery/RolligGallery.jsx";
import Card from "./components/Card/Card.jsx";
import TwoColumn from "./components/TwoColumn/TwoColumn.jsx";
import Testimonios from "./components/Testimonios/Testimonios.jsx";
import textsData from "./assets/data/Card.json";
import twoColomData from "./assets/data/TwoColumn.json";
import Counter from "./components/counter/Counter.jsx";
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import "./styles/globals.css";
import "./App.css";
import ImagenCard from "./components/Card/ImagenCard/ImagenCard.jsx";

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

      <div>
        <ImagenCard></ImagenCard>
      </div>
       <div>
      <Counter/>
    </div>

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
      <div></div>
      <div>
        <TwoColumn
          title={twoColomData[0].title}
          text={twoColomData[0].text}
          url={twoColomData[0].mediaUrl}
          mediaType={twoColomData[0].mediaType}
          textOnLeft={twoColomData[0].textOnLeft}
        />
      </div>
      <div>
        <TwoColumn
          title={twoColomData[1].title}
          text={twoColomData[1].text}
          url={twoColomData[1].mediaUrl}
          mediaType={twoColomData[1].mediaType}
          textOnLeft={twoColomData[1].textOnLeft}
        />
      </div>
      <div>
        <TwoColumn
          title={twoColomData[2].title}
          text={twoColomData[2].text}
          url={twoColomData[2].mediaUrl}
          mediaType={twoColomData[2].mediaType}
          textOnLeft={twoColomData[2].textOnLeft}
        />
      </div>
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
      <div>
        <Testimonios></Testimonios>
      </div>
      <AnnouncementBar />
      <div></div>
    </>
  );
}
