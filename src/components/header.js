import React from 'react';
import '../styles/css/header.css';

export default () => {
  return (

    <div className="header">
      <a className="logo">DREAMSHARE</a>
      <div className="auth">
        <a className="login">Log in</a>
        <a className="signup">Sign up</a>
      </div>
    </div>

  );
};
