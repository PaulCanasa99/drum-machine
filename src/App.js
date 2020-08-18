import React, { Component } from 'react';
import Drum from './components/Drum';
import DrumPad from './components/DrumPad';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  render() {
    return (
      <div style={this.mainStyle}>
        <Drum>
          <DrumPad>Gaaa</DrumPad>
          Gaaa
        </Drum>
      </div>
    );
  }
}

export default App;
