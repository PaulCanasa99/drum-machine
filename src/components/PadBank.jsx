import React, { Component } from 'react';
import DrumPad from './DrumPad';
import './PadBank.css';
class PadBank extends Component {
  render() {
    return (
      <div className="pad-bank">
        <div className="row">
          <DrumPad>f</DrumPad>
          <DrumPad>f</DrumPad>
          <DrumPad>f</DrumPad>
        </div>
        <div className="row">
          <DrumPad>f</DrumPad>
          <DrumPad>f</DrumPad>
          <DrumPad>f</DrumPad>
        </div>{' '}
        <div className="row">
          <DrumPad>f</DrumPad>
          <DrumPad>f</DrumPad>
          <DrumPad>f</DrumPad>
        </div>
      </div>
    );
  }
}

export default PadBank;
