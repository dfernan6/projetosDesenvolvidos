import React, { useState } from 'react';
import ColorPalette from './components/ColorPalette';
import PixelBoard from './components/PixelBoard';
import './App.css';

const appStyle = {
  backgroundImage: "url('/bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  maxHeight: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "5px",
};

function App() {
  const palleteColors = [
    "rgb(255, 0, 0)", 
    "rgb(0, 255, 0)",  
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
  ];

  const [selectedColors, setSelectedColors] = useState([]);

function mixColors(colors) {
  const hasRed = colors.includes("rgb(255, 0, 0)");
  const hasGreen = colors.includes("rgb(0, 255, 0)");
  const hasBlue = colors.includes("rgb(0, 0, 255)");
  const hasYellow = colors.includes("rgb(255, 255, 0)");

  // Lógica personalizada
  if (hasRed && hasGreen && hasBlue) return "rgb(255, 255, 255)"; // branco
  if (hasRed && hasGreen && hasYellow) return "rgb(255, 255, 255)"; // branco
  if (hasYellow && hasGreen && hasBlue) return "rgb(255, 255, 255)";// branco
  if (hasRed && hasGreen) return "rgb(127, 127, 0)"; // marrom
  if (hasGreen && hasBlue) return "rgb(0, 255, 255)"; // ciano
  if (hasYellow && hasBlue) return "rgb(0, 255, 0)"; // verde
  if (hasRed && hasBlue) return "rgb(255, 0, 255)"; // magenta
  if (hasYellow && hasGreen) return "rgb(0, 0, 255)"; // azul (sua regra personalizada)
  if (hasYellow && hasRed) return "rgb(255,127,0)" //laranja
  if (colors.length === 1) return colors[0];

  return "rgb(0, 0, 0)"; // padrão
}

  const mixedColor = mixColors(selectedColors);

  return (
    <div style={appStyle}>
      <header>
        <h1 id="title">Paleta de Cores</h1>
      </header>

      <section id="color-palette">
        <ColorPalette
          colors={palleteColors}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
      </section>

      <PixelBoard width={10} height={10} selectedColor={mixedColor} />

      <footer>
        &copy; <b><i>Danilo Fernandes</i></b>
      </footer>
    </div>
  );
}

export default App;