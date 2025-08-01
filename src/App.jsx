import React from "react";
import Home from "./pages/Home/Home.jsx";
import Index from "./components/Index/Index.jsx";

export default function App() {
  // Aquí se guarda el índice que se seleccionó
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  // Esta función se pasa a Index y se ejecuta cuando se hace clic en un botón
  const handleSelect = (index) => {
    setLastSelectedIndex(index);
    console.log(`El último índice seleccionado es: ${index}`);
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
      <Home />;
      <Index
        onSelect={handleSelect}
        selectedIndex={lastSelectedIndex}
        hoverTexts={texts}
      />
      {/* ---------------------------------------------------- */}
      {/* Renderiza el otro componente y le pasas el índice como prop */}
      {/* ---------------------------------------------------- */}
      {/*<OtroComponente selectedIndex={lastSelectedIndex} />*/}
    </>
  );
}
