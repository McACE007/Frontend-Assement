"use client"
import { useState } from 'react';

type Props = {
  initialColors: string[];
}

const ColorPalette = ({ initialColors }: Props) => {
  const [colors, setColors] = useState(initialColors);
  const [dragging, setDragging] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDragging(index);
  };

  const handleDragOver = (index: number) => {
    const draggedOverItem = colors[index];

    if (dragging === index) {
      return;
    }

    let newColors = colors.filter((color, idx) => idx !== dragging);

    newColors.splice(index, 0, colors[dragging!]);

    setDragging(index);
    setColors(newColors);
  };

  const handleColorChange = (index: number, event: any) => {
    const newColors = colors.map((color, idx) =>
      idx === index ? event.target.value : color
    );
    setColors(newColors);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-20 h-20"
          style={{ backgroundColor: color }}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
        >
          <input
            type="color"
            value={color}
            onChange={(e) => handleColorChange(index, e)}
            className="opacity-0 w-full h-full cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
