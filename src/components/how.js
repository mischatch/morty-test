import React from 'react';
import HowItem from './howItem';
import '../styles/css/how.css';
import img1 from '../assets/Desktop/How it works/Step 1/Step 1 image/Bitmap.png';
import img2 from '../assets/Desktop/How it works/Step 2/Step 1 image/Bitmap.png';
import img3 from '../assets/Desktop/How it works/Step 3/Step 1 image/Bitmap.png';

export default () => {
  const data = [
    { pos: 'step 1',
      title: 'Sed leo enim, condimentum',
      txt: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
      img: img1},
    { pos: 'step 2',
      title: 'Morbi velit risus',
      txt: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.',
      img: img2},
    { pos: 'step 3',
      title: 'Sed leo enim, condimentum',
      txt: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
      img: img3},
  ];

  return (
    <div className='how-container'>
      <h1 className='how-title'>How Dreamshare works?</h1>
      <div className='how-cards'>
        {data.map((item, key) => <HowItem
          key={key}
          pos={item.pos}
          title={item.title}
          txt={item.txt}
          img={item.img}
          />)}
      </div>
    </div>
  );
};
