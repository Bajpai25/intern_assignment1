import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ColorBox = ({ color, index, moveColor, replaceColor }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: 'COLOR',
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveColor(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'COLOR',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      onDoubleClick={replaceColor}
      style={{
        backgroundColor: color,
        width: '100px',
        height: '100px',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    ></div>
  );
};

export default ColorBox;
