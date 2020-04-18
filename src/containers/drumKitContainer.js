import React from 'react';
import Instrument from '../components/instrument'
// import all instrument sounds 
import Bass from '../assets/audio/bass-drum__1_mezzo-piano_struck-singly.mp3'
import ClashCymbal from '../assets/audio/clash-cymbals__1_forte_damped.mp3'
import Cowbell from '../assets/audio/cowbell__1_forte_undamped.mp3'
import Djembe from '../assets/audio/djembe__05_forte_undamped.mp3'
import SleighBells from '../assets/audio/sleigh-bells__05_mezzo-forte_shaken.mp3'
import SnareDrum from '../assets/audio/snare-drum__025_forte_with-snares.mp3'
import Tambourine from '../assets/audio/tambourine__05_forte_hand.mp3'
import VibraSlap from '../assets/audio/vibraslap__05_forte_damped.mp3'
import Woodblock from '../assets/audio/woodblock__025_mezzo-forte_struck-singly.mp3'

class DrumKitContainer extends React.Component {

  state = {
    instruments:  {
      bass: Bass,
      cymbal: ClashCymbal,
      cowbell: Cowbell,
      djembe: Djembe,
      sleighbells: SleighBells,
      snare: SnareDrum,
      tambourine: Tambourine,
      vibraslap: VibraSlap,
      woodblock: Woodblock
    },
    currentKey: ''
  }

  renderInstruments = () => {
    let instrumentComponents = []
    let keys = ['Q','W','E','A','S','D','Z','X','C']
    let i = 0
    for (let instrument in this.state.instruments) {
      instrumentComponents.push(
        <Instrument instrument={instrument} audioFile={this.state.instruments[instrument]} button={keys[i]} key={instrument} updateDisplay={this.updateDisplay}/>
      )
      i++
    }
    return instrumentComponents
  }

  updateDisplay = key => {
    this.setState(prevState => ({
      ...prevState,
      currentKey: key
    }))
  }

  render(){
    return(
      <div id="drum-machine">
        <h1>fCC Drum Machine</h1>
        <div id="display">
          <h3>{this.state.currentKey}</h3>
        </div>
        <div id="button-container">
          {this.renderInstruments()}
        </div>
      </div>
    )
  }

}

export default DrumKitContainer;