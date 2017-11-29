import React, { Component } from 'react'
import Sound from 'react-sound'
import track from './track.mp3'

class Player extends Component {
  constructor() {
    super()
    this.handlePlaying = this.handlePlaying.bind(this)
  }

  handlePlaying({ position, duration }) {
    console.log(position)
  }

  render() {
    return(
      <Sound
        onPlaying={this.handlePlaying}
        url={track}
        playStatus={'PAUSE'}
      />
    )
  }
}

export default Player
