import React from 'react';
//import './ColorPalette.css';

function ColorPalette({ colors, selectedColor, onSelectColor }) {
  return (
    <ul className="colors-ul">
      {colors.map((color, index) => (
        <li
          key={index}
          className={`color ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </ul>
  );
}

export default ColorPalette;