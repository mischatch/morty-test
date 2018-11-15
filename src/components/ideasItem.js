import React from 'react';
import '../styles/css/ideasItem.css';

export default ({title, size, img}) => {
  return (
    <div className={`idea-card ${size}`} >
      <div className="idea-card-title">{title}</div>
      <div className="idea-card-image-container">
        <img src={img} />
      </div>
    </div>
  );
};
