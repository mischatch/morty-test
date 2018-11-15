import React from 'react';
import MeetItem from './meetItem';
import '../styles/css/meet.css';

import tune from '../assets/Desktop/Meet partner/Person/Avatar/music2.png';
import img1 from '../assets/Desktop/Meet partner/Person/Avatar/Photo/Bitmap.png';
import brush from '../assets/Desktop/Meet partner/Person Copy/Avatar/brush.png';
import img2 from '../assets/Desktop/Meet partner/Person Copy/Avatar/Photo/Bitmap.png';
import photo from '../assets/Desktop/Meet partner/Person Copy 2/Avatar/camera.png';
import img3 from '../assets/Desktop/Meet partner/Person Copy 2/Avatar/Photo/Bitmap.png';
import plane from '../assets/Desktop/Meet partner/Person Copy 3/Avatar/airplane.png';
import img4 from '../assets/Desktop/Meet partner/Person Copy 3/Avatar/Photo/Bitmap.png';

export default () => {
  const data = [
    {
      icon: tune,
      iconCol: 'tune',
      img: img1,
      name: 'Bradley Hunter',
      info: 'Based in Chicago. I love playing tennis and loud music.'
    },
    {
      icon: brush,
      iconCol: 'brush',
      img: img2,
      name: 'Marie Bennett',
      info: 'Currently living in Colorado. Lover of art, languages and travelling.'
    },
    {
      icon: photo,
      iconCol: 'photo',
      img: img3,
      name: 'Diana Wells',
      info: 'Living in Athens, Greece. I love black and white classics, chillout music and green tea.'
    },
    {
      icon: plane,
      iconCol: 'plane',
      img: img4,
      name: 'Christopher Pierce',
      info: 'Star Wars fanatic. I have a persistent enthusiasm to create new things.'
    },
  ];

  return (
    <div className='meet-container'>
      <h1 className='meet-title'>Meet a partner for your best holiday</h1>
      <div className='meet-cards'>
        {data.map((item, key) => <MeetItem
          key={key}
          icon={item.icon}
          iconCol={item.iconCol}
          img={item.img}
          name={item.name}
          info={item.info}
          />)}
      </div>
      <a className='partners-link'>See other partners</a>
    </div>
  );
};
