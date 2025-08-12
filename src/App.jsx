import React, { useState } from "react";

import Home from "./pages/Home/Home.jsx";
import Index from "./components/Index/Index.jsx";
import RollingGallery from "./components/RollingGallery/RolligGallery.jsx";
import Card from "./components/Card/Card.jsx";
import TwoColumn from "./components/TwoColumn/TwoColumn.jsx";
import Testimonios from "./components/Testimonios/Testimonios.jsx";
import ImagenCard from "./components/Card/ImagenCard/ImagenCard.jsx";
import Counter from "./components/counter/Counter.jsx";
import textsData from "./assets/data/Card.json";
import twoColomData from "./assets/data/TwoColumn.json";
import ImagenCardData from "./assets/data/imagenCard.json";
import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";

import "./styles/globals.css";
import "./App.css";
import ControllerCard from "./components/Card/ControllerCard/ControllerCard.jsx";

export default function App() {
  return (
    <>
      <Home />

      <div>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>

      <div>
        <Counter />
      </div>
      <div>
        <ImagenCard
          title={ImagenCardData[0].title}
          image={ImagenCardData[0].image}
          description={ImagenCardData[0].description}
        ></ImagenCard>
      </div>

      <div className="contenedor-principal-index">
        <ControllerCard textsData={textsData}></ControllerCard>
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
        <ControllerCard textsData={textsData}></ControllerCard>
      </div>
      <div>
        <Testimonios></Testimonios>
      </div>
      <AnnouncementBar />
      <div></div>
    </>
  );
}
