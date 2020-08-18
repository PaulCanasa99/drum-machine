import React, { Component } from 'react';
import './Drum.css';
import PadBank from './PadBank';
class Drum extends Component {
  state = {};
  render() {
    return (
      <div id="drum-machine" className="container">
        <PadBank />
        <textarea>Conchetumare</textarea>
      </div>
    );
  }
}

export default Drum;
