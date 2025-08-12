import React, { useState } from "react";
import Index from "../../Index/Index.jsx";
import Card from "../../Card/Card.jsx";

function ControllerCard({ textsData }) {
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);
  const [showCard, setShowCard] = useState(true);

  const handleSelect = (index) => {
    setShowCard(false);
    setTimeout(() => {
      setLastSelectedIndex(index);
      setShowCard(true);
    }, 300);
  };

  return (
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
  );
}

export default ControllerCard;
