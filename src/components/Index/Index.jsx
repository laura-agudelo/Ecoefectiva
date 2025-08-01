import React, { useState } from "react";
import "./index.css";

function Index({ onSelect, selectedIndex, hoverTexts }) {
  const items = [];
  for (let i = 0; i < hoverTexts.length; i++) {
    let item = i + 1;
    items.push(item);
  }
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <ul className="btn-list">
      {items.map((item, index) => (
        <li
          key={index}
          className="btn-container"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`btn-item ${index === selectedIndex ? "selected" : ""}`}
            onClick={() => onSelect(index)}
          >
            {item}
          </button>
          <span
            className={`hover-text ${
              index === hoveredIndex && index !== selectedIndex ? "visible" : ""
            }`}
          >
            {hoverTexts[index]}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Index;
