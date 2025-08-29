import React from 'react';

function ColorPalette({ colors, selectedColors, setSelectedColors }) {
  function handleColorClick(color) {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleColorClick(color)}
          style={{
            backgroundColor: color,
            width: '40px',
            height: '40px',
            border: selectedColors.includes(color) ? '3px solid #000' : '1px solid #ccc',
            cursor: 'pointer'
          }}
        />
      ))}
    </div>
  );
}

export default ColorPalette;