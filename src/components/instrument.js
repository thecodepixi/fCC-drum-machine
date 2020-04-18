import React from 'react';

class Instrument extends React.Component {

  showClick = () => {
    let button = document.querySelector(`#${this.props.instrument}`)
    button.classList.add("playing")
    setTimeout(() => button.classList.remove("playing"), 250)
  }

  playAudio = () => {
    let audio = document.querySelector(`#${this.props.button}`)
      let audioPlayback = audio.play() 
      if (audioPlayback !== undefined) {
        audioPlayback.then( _ => {
          this.props.updateDisplay(this.props.button)
          this.showClick()
          audio.currentTime = 0
        }).catch( err => console.error(err))
      }
  }

  handleClick = () => {
    this.playAudio()
    this.props.updateDisplay(this.props.button)
    this.showClick()
  }

  handKeyDown = e => {
    if (e.key === this.props.button.toLowerCase()) {
      this.playAudio()
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