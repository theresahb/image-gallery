import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './style.css';

const DraggableImage = ({ image, index, moveImage, images }) => {
  const [, ref] = useDrag({
    type: 'IMAGE',
    item: { index },
  });

  const [, drop] = useDrop({
    type: 'IMAGE',
    accept: 'IMAGE',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const handleTouchStart = (e) => {
    // Prevent default touch behavior (e.g., scrolling)
    e.preventDefault();
  };

  return (
    <div
      ref={(node) => {
        ref(drop(node));
      }}
      className="image"
      onTouchStart={handleTouchStart} // Prevent default touch behavior
    >
      <img src={image.image} alt="Image" loading="lazy" onTouchStart={handleTouchStart} />
    </div>
  );
};

export default DraggableImage;
