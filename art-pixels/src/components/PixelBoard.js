import React, { useState } from 'react';
//import './PixelBoard.css';

function PixelBoard({ width, height, selectedColor }) {
  const [pixels, setPixels] = useState(
    Array(height).fill().map(() =>
      Array(width).fill('rgb(255,255,255)')
    )
  );

  const handlePixelClick = (rowIndex, colIndex) => {
    const newPixels = [...pixels];
    newPixels[rowIndex][colIndex] = selectedColor;
    setPixels(newPixels);
  };

  const handleClear = () => {
    setPixels(
      Array(height).fill().map(() =>
        Array(width).fill('rgb(255,255,255)')
      )
    );
  };

  return (
    <div>
      <button onClick={handleClear}>Limpar</button>
      <div id="pixel-board">
        {pixels.map((row, rowIndex) => (
          <div key={rowIndex} className="pixel-line">
            {row.map((color, colIndex) => (
              <div
                key={colIndex}
                className="pixel"
                style={{ backgroundColor: color }}
                onClick={() => handlePixelClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PixelBoard;