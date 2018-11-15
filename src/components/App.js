import React, { Component } from 'react';
import '../styles/css/App.css';
import Banner from './banner';
import How from './how';
import Meet from './meet';
import Ideas from './ideas';
import Interests from './interests';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <How />
        <Meet />
        <Ideas />
        <Interests />
        <Footer />
      </div>
    );
  }
}

export default App;
