import React, { useEffect, useState } from 'react';
import { gallery } from '../../data';
import './style.css';
import DraggableImage from '../DraggableImage/DraggableImage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Gallery = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const filteredImages = gallery.filter((pic) => {
      const tags = pic.type;
      return tags.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setImages(filteredImages);
    setIsLoading(false);
  }, [searchTerm]);

  const moveImage = (fromIndex, toIndex) => {
    const movedImage = images[fromIndex];
    const updatedImages = [...images];
    updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        {isLoading ? (
          <div>
            <svg
              className="load"
              width="50"
              height="50"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
              d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
              stroke="#433f6d"
              />
            </svg>
        </div>
        ) : (
          <div className="image-container">
            {images.map((image, index) => (
              <DraggableImage
                key={index}
                image={image}
                index={index}
                moveImage={moveImage}
                images={images}
              />
            ))}
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default Gallery;