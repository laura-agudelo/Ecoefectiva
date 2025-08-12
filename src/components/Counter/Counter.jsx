import React from "react";
import "./Counter.css";
import CircularText from "../CircularText/CircularText";
export default function Counter() {
  return (
    <div className="counter-container">
      <div className="counter-item">
        <p>1 Litro por segundo</p>
        <img src="agua-sucia.png" alt="Agua sucia" className="water-icon" />
      </div>

      <div className="counter-center">
        <button className="contador-btn">CONTADOR</button>
        <div className="circle-arrows">
          <CircularText
            text="REACT*BITS*COMPONENTS*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
          {/* <img src="flechas.png" alt="Flechas circulares" className="circle-arrows-img" /> */}
        </div>
      </div>

      <div className="counter-item">
        <p>Agua tratada</p>
        <img src="agua-limpia.png" alt="Agua limpia" className="water-icon" />
      </div>

      <div className="counter-display">
        <div className="digits">
          {Array.from("0000000").map((num, i) => (
            <div key={i} className="digit-box">
              {num}
            </div>
          ))}
        </div>
        <p className="counter-info">18,748,800 &nbsp; 7 meses</p>
      </div>
    </div>
  );
}
