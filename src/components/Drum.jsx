import React, { Component } from 'react';
import './Drum.css';
import PadBank from './PadBank';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { bankOne, bankTwo } from './Banks';

class Drum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3,
    };
  }
  handlePower = () => {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160),
    });
  };
  handleBank = () => {
    if (this.state.power) {
      this.state.currentPadBankId === 'Heater Kit'
        ? this.setState({
            currentPadBank: bankTwo,
            currentPadBankId: 'Smooth Piano Kit',
            display: 'Smooth Piano Kit',
          })
        : this.setState({
            currentPadBank: bankOne,
            currentPadBankId: 'Heater Kit',
            display: 'Heater Kit',
          });
    }
  };
  displayClipName = (name) => {
    if (this.state.power) {
      this.setState({
        display: name,
      });
    }
  };
  adjustVolume = (e) => {
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: 'Volume: ' + Math.round(e.target.value * 100),
      });
    }
  };
  render() {
    return (
      <div id="drum-machine" className="inner-container">
        <PadBank
          currentPadBank={this.state.currentPadBank}
          power={this.state.power}
          updateDisplay={this.displayClipName}
          clipVolume={this.state.sliderVal}
        />
        <div className="logo">
          Drum Machine
          <MusicNoteIcon />
        </div>
        <div className="controls-container">
          <div className="control" onClick={this.handlePower}>
            <p>Power</p>
            <div className="select">
              <div
                className="inner"
                style={
                  this.state.power ? { float: 'right' } : { float: 'left' }
                }
              />
            </div>
          </div>
          <p id="display">{this.state.display}</p>
          <div className="volume-slider">
            <input
              type="range"
              step="0.01"
              min="0"
              max="1"
              value={this.state.sliderVal}
              onChange={this.adjustVolume}
            />
          </div>
          <div className="control" onClick={this.handleBank}>
            <p>Bank</p>
            <div className="select">
              <div
                className="inner"
                style={
                  this.state.currentPadBank === bankOne
                    ? { float: 'right' }
                    : { float: 'left' }
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drum;
