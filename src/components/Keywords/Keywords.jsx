import React from 'react'
import './style.css'

const Keywords = ({ setSearchTerm }) => {
    const handleKeyword = (e, keyword) => {
      // If 'All' button is clicked, set searchTerm to an empty string to display all images
      const searchTerm = keyword === 'All' ? '' : e.target.textContent;
      setSearchTerm(searchTerm);
    };
  
    return (
      <div className='keywords flex'>
        <button onClick={(e) => handleKeyword(e, 'All')}>All</button>
        <button onClick={(e) => handleKeyword(e, 'Wallpaper')}>Wallpaper</button>
        <button onClick={(e) => handleKeyword(e, 'Animal')}>Animal</button>
        <button onClick={(e) => handleKeyword(e, 'Street Photography')}>Street Photography</button>
        <button onClick={(e) => handleKeyword(e, 'Nature')}>Nature</button>
        <button onClick={(e) => handleKeyword(e, 'Fashion')}>Fashion</button>
        <button onClick={(e) => handleKeyword(e, 'Work')}>Work</button>
        <button onClick={(e) => handleKeyword(e, 'Travel')}>Travel</button>
      </div>
    );
  };
  
export default Keywords;