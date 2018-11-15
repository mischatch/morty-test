import React, { Component } from 'react';
import '../styles/css/interests.css';

class Interests extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    this.setState({input: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const { input } = this.state;
    this.setState({input: ''}, () => {
      console.log(`If this website were real, you'd searched "${input}"!!!`);
    });
  }

  render(){
    return (
      <div className='interests-container'>
        <h1 className='interests-title'>Create your holiday activity</h1>
        <h2 className='interests-txt'>Hi! What are your holiday interests?</h2>
        <form className='interests-form' onSubmit={this.handleSubmit}>
          <input
            className='interests-input'
            value={this.state.input}
            onChange={this.handleInput}
            placeholder="Enter your insterests"/>
          <button className='interests-button' onClick={this.handleSubmit}>Search partners</button>
        </form>

      </div>
    );
  }
}

export default Interests;
