import React from 'react';
import IdeasItem from './ideasItem';
import '../styles/css/ideas.css';

import img1 from '../assets/Desktop/Ideas/Sport/Bitmap.png';
import img2 from '../assets/Desktop/Ideas/Healath/Bitmap.png';
import img3 from '../assets/Desktop/Ideas/Extreme/Bitmap.png';
import img4 from '../assets/Desktop/Ideas/Games/Bitmap.png';
import img5 from '../assets/Desktop/Ideas/Culture/Bitmap.png';
import img6 from '../assets/Desktop/Ideas/Culture Copy/Bitmap.png';
import img7 from '../assets/Desktop/Ideas/Games Copy/Bitmap.png';

export default () => {
  const data = [
    {
      title: 'Sports and Activis',
      img: img1,
      size: 'single',
    },
    {
      title: 'Wellness and Health',
      img: img2,
      size: 'single',
    },
    {
      title: 'Extreme Sports and Expeditions',
      img: img3,
      size: 'single',
    },
    {
      title: 'Games',
      img: img4,
      size: 'single',
    },
    {
      title: 'Culture and Education',
      img: img5,
      size: 'double',
    },
    {
      title: 'Enjomet and Relaxation',
      img: img6,
      size: 'double',
    },
    {
      title: 'Trevelling',
      img: img7,
      size: 'single',
    }
  ];

  return (
    <div className='ideas-container'>
      <h1 className='ideas-title'>Discover holiday activity ideas</h1>
      <div className='ideas-cards'>
        {data.map((item, key) => <IdeasItem
          key={key}
          title={item.title}
          img={item.img}
          size={item.size}
          />)}
      </div>
    </div>
  );
};
