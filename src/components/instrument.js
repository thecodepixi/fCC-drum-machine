import React from 'react';

class Instrument extends React.Component {

  handleClick = () => {
    let audio = document.querySelector(`#${this.props.button}`)
    audio.play()
    this.props.updateDisplay(this.props.button)
  }

  handKeyDown = e => {
    if (e.key === this.props.button.toLowerCase()) {
      let audio = document.querySelector(`#${this.props.button}`)
      audio.currentTime = 0
      audio.play()
      this.props.updateDisplay(this.props.button)
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handKeyDown)
  }

  render() {
    return(
      <button className="drum-pad" id={this.props.instrument} onClick={this.handleClick}>
        {this.props.button}
        <audio id={this.props.button} src={this.props.audioFile} className="clip" ></audio>
      </button>
    )
  }
}

export default Instrument