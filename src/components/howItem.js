import React from 'react';
import '../styles/css/howItem.css';

export default ({pos, title, txt, img}) => {
  return (
    <div className='how-card'>
      <div className='step'>{pos}</div>
      <h1 className='how-card-title'>{title}</h1>
      <h2 className='how-card-txt'>{txt}</h2>
      <div className="how-image-container">
        <img className="how-card-img" src={img}/>
      </div>

    </div>
  )
}
