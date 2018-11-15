import React from 'react';
import '../styles/css/meetItem.css';

export default ({icon, iconCol, img, name, info}) => {
  return (
    <div className='meet-card'>
      <div className="meet-image-container">
        <img className="meet-card-img" src={img}/>
      </div>
      <div className={`meet-icon ${iconCol}`}>
        <img src={icon} />
      </div>
      <h1 className='meet-card-name'>{name}</h1>
      <h2 className='meet-card-info'>{info}</h2>
    </div>
  )
}
