import React from 'react';
import ColorBox from './ColorBox';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';

const ColorPalette = ({ colors, setColors }) => {
  const moveColor = (dragIndex, hoverIndex) => {
    const draggedColor = colors[dragIndex];
    setColors(
      update(colors, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, draggedColor]],
      })
    );
  };

  const [, drop] = useDrop({ accept: 'COLOR' });

  const replaceColor = (index) => {
    const newColor = prompt("Enter new color:");
    if (newColor) {
      setColors(
        update(colors, {
          [index]: { $set: newColor },
        })
      );
    }
  };

  return (
    <div ref={drop} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {colors.map((color, index) => (
        <ColorBox
          key={index}
          index={index}
          color={color}
          moveColor={moveColor}
          replaceColor={() => replaceColor(index)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
