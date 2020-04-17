import React from 'react';
import Instrument from '../components/instrument'

class DrumKitContainer extends React.Component {

  state {
    audioFiles: 
  }

  render(){
    return(
      <div id="drum-machine">
        <h1>fCC Drum Machine</h1>
        <div id="display">

        </div>
        { this.renderInstruments() }
      </div>

    )
  }

}

export default DrumKitContainer;