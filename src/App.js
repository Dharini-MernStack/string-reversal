import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    txt: ""
  };
  render() {
    return(
      <>
    <div className='heading'>
      <h1>Enter any text and see the output reversed !</h1>
    </div>
      <div id='app'>
        
        <div className='top'>
          <input type='text' id='inputFld' onChange={e => this.setState({ txt: e.target.value })} />
        </div>
        <div className='bottom'>
          <span className='output'>{this.state.txt.split('').reverse().join('')}</span>
        </div>
      </div>
      </>
    )
  }
}

export default MyApp;