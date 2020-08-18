import React, { Component } from 'react';
import './DrumPad.css';
class DrumPad extends Component {
  playSound = (e) => {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.volume = this.props.clipVolume;
    sound.play();
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  };
  handleKeyPress = (e) => {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyPress);
  };
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyPress);
  };
  render() {
    return (
      <div onClick={this.playSound} id={this.props.clipId} className="drum-pad">
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
