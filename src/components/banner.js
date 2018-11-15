import React from 'react';
import '../styles/css/banner.css';
import back from '../assets/Desktop/Headaer and Promo/Background/Bitmap.png';
import Header from './header';

export default () => {
  return (

      <div className="banner">
        <Header />

        <div className="slogan slogan-1">
          SHARE YOUR HOLIDAY DREAM
        </div>
        <div className="slogan slogan-2">
          And find the perfect partner to fullfill it
        </div>
        <a className='find'>Find your holiday partner</a>
        <div className="background">
          <img src={back}/>
        </div>
      </div>

  );
};
