import React from 'react';
import '../styles/css/footer.css';

export default () => {
  return(
    <div className='footer-container'>
      <div className='footer-internal'>
        <div className='footer-logo'>DREAMSHARE</div>
        <div className='footer-company'>Company
          <ul>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a>Press</a></li>
          <li><a>Blog</a></li>
          <li><a>Terms and Privacy</a></li>
          <li><a>Help</a></li>
          </ul>
        </div>
        <div className='footer-partners'>Partners</div>
      </div>
    </div>
  );
};
