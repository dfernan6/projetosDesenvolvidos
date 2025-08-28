import React, { useState } from 'react';
import ColorPalette from './components/ColorPalette';
import PixelBoard from './components/PixelBoard';
import './App.css';

function App() {
  const palleteColors = [
    "rgb(0, 0, 0)",
    "rgb(255, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgba(251, 255, 0, 1)",
    "rgba(184, 184, 184, 1)",
    "rgb(255, 0, 0)",
    "rgba(255, 136, 0, 1)",
    "rgba(153, 0, 255, 1)",
    "rgba(255, 0, 255, 1)"
  ];

  const [selectedColor, setSelectedColor] = useState(palleteColors[0]);

  return (
    <div id="root">
      <header>
        <h1 id="title">Paleta de Cores</h1>
      </header>
      <section id="color-palette">
        <ColorPalette
          colors={palleteColors}
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
        />
      </section>
      <PixelBoard width={5} height={5} selectedColor={selectedColor} />
      <footer>
        &copy; <b><i>Danilo Fernandes</i></b>
      </footer>
    </div>
  );
}

export default App;