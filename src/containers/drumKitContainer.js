import React from 'react';
import Instrument from '../components/instrument'

class DrumKitContainer extends React.Component {

  renderInstruments = () => {
    let instruments = []

    for( let i = 0; i < 6; i++) {
      instruments.push( <Instrument /> )
    }

    return instruments 
  }
  
  render(){
    return(
      <div>
        <h1>I am the container...</h1>
        <h2>Here are some instruments:</h2>
        { this.renderInstruments() }
      </div>

    )
  }

}

export default DrumKitContainer;