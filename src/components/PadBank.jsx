import React, { Component } from 'react';
import DrumPad from './DrumPad';
import './PadBank.css';
class PadBank extends Component {
  render() {
    let padBank;
    this.props.power
      ? (padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              clipId={padBankArr[i].id}
              clip={padBankArr[i].url}
              keyTrigger={padBankArr[i].keyTrigger}
              keyCode={padBankArr[i].keyCode}
              updateDisplay={this.props.updateDisplay}
              power={this.props.power}
              clipVolume={this.props.clipVolume}
            />
          );
        }))
      : (padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              clipId={padBankArr[i].id}
              clip="#"
              keyTrigger={padBankArr[i].keyTrigger}
              keyCode={padBankArr[i].keyCode}
              updateDisplay={this.props.updateDisplay}
              power={this.props.power}
              clipVolume={this.props.clipVolume}
            />
          );
        }));
    return <div className="pad-bank">{padBank}</div>;
  }
}

export default PadBank;
