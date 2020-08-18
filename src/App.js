import React, { Component } from 'react';
import Drum from './components/Drum';
import { green } from '@material-ui/core/colors';
class App extends Component {
  mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#4384c2',
  };
  render() {
    return (
      <div style={this.mainStyle}>
        <Drum></Drum>
      </div>
    );
  }
}

export default App;
